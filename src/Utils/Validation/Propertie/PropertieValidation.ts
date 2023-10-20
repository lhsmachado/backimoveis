import * as yup from 'yup'
import { PropertieDocument } from '../../../App/Properties/Entities/PropertiesSchema';



class PropertieValidation {
    static async Verify(data:PropertieDocument){
        const authSchema = yup.object().shape({
            titulo: yup.string().required(),
            tipo: yup.string().required(),
            codigo: yup.number(),
            cidade: yup.string().required(),
            UF: yup.string().required(),
            metros2: yup.number(),
            descricao: yup.string().required(),
            suite: yup.number(),
            quartos: yup.number().required(),
            vagagaragem: yup.number(),
            banheiros: yup.number(),
            valorCondominio: yup.number(),
            IPTU: yup.string(),
            precoAluguel: yup.string(),
            precoVenda: yup.string(),
            fotos: yup.string(),
        })
        try {
            await authSchema.validate(data);
            return {message: 'Success', status: 200}
        } catch(error){
            return {error: 'Unauthorized', status: 401}
        }
    }
}

export { PropertieValidation }