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


}

export { PropertieController }