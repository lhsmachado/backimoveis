import { Schema, model, InferSchemaType } from 'mongoose';

const PropertieSchema = new Schema({
    titulo: { type: String, required: true, unique: true },
    tipo: { type: String, required: true, enum: ['locação', 'venda']},
    codigo: { type: Number, default:0, unique: true},
    cidade: { type: String, required: true },
    UF: { type: String, required: true },
    metros2: { type: String, defaul: 0 },
    descricao: { type: String, required: true },
    suite: { type: String, default: 0 },
    quartos: {type: String, default: 1},
    vagagaragem: {type: String, default: 0},
    banheiros: { type: String, default: 1},
    valorCondominio: { type: String, default: null},
    IPTU: { type: String, default: null},
    precoAluguel: {type: String, default: null},
    precoVenda: {type: String, default: null},
    fotos: []
},{timestamps: true})


type PropertieDocument  = InferSchemaType<typeof PropertieSchema>
const Propertie = model("properties", PropertieSchema)

export { Propertie, PropertieDocument}