import { PropertieService } from "../Service/PropertieService";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";
import { Request, Response } from "express";
import { PropertieValidation } from "../../../Utils/Validation/Propertie/PropertieValidation";

class PropertieController {
    constructor(private service: PropertieService) { }

    async Create(req: Request, res: Response) {
        const { body, files } = req

        const BodyVerify = await PropertieValidation.Verify(body);
        if (BodyVerify.error) {
            return res.status(BodyVerify.status).json(BodyVerify.error);
        }

        try {
            const Properties = await this.service.CreatePropertie({
                ...body,
                files
            });
            res.status(STATUS_CODE.CREATED).json({ Properties })
        } catch (error) {
            console.log(error)
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }
    }

    async FindAll(req: Request, res: Response) {
        try {
            const result = await this.service.FindAll();
            res.status(STATUS_CODE.OK).json({ result });
        } catch (error) {
            console.log(error)
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }
    }

    async Filter(req: Request, res: Response) {
        try {
            // Tento pegar tudo da query e colocar em params
            const params = req.query;
            // Criar um objeto de filtro
            const filter: { [key: string]: string } = {};
            for (const key in params) {
                filter[key] = params[key] as string;
            }
            // Filtrar as vagas
            const results = await this.service.FilterFromService(filter);
            if('error' in results && results.error){
                return res.status(results.status).json(results);
            }
            // Retornar os resultados
            res.status(STATUS_CODE.OK).json(results)

        } catch (error: any) {
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }
    }



    async Edit(req: Request, res: Response) {
        const id = req.params.id as string;
        const body = req.body
        try {
        const EditPropertie = await this.service.EditService(id, body)
        if(EditPropertie){
            res.status(STATUS_CODE.OK).json({EditPropertie})
        }
        else {
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }
        } catch (error) {
            console.log(error)
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }
    }


    async FilterPagination(req:Request, res: Response){
        const { itensPage , page } = req.query
        const convert = parseInt(itensPage as string);
        const convert2 = parseInt(page as string);

        const result = await this.service.Pagination(convert, convert2);
        return res.status(STATUS_CODE.OK).json(result)  
    }
}

export { PropertieController }