import { Schema, model, InferSchemaType } from 'mongoose';


const PropertieSchema = new Schema({
    titulo: { type: String, required: true, unique: true },
    tipo: { type: String, required: true, enum: ['locação', 'venda']},
    codigo: { type: Number, default:0},
    cidade: { type: String, required: true },
    UF: { type: String, required: true },
    metros2: { type: Number, defaul: 0 },
    descricao: { type: String, required: true },
    suite: { type: Number, default: 0 },
    quartos: {type: Number, required: true, default: 1},
    vagagaragem: {type: Number, default: 0},
    banheiros: { type: Number, default: 1},
    valorCondominio: { type: Number, default: null},
    IPTU: { type: Number, default: null},
    precoAluguel: {type: Number, default: null},
    precoVenda: {type: Number, default: null},
    fotos: [{ type: Schema.Types.ObjectId, ref: "propertiesphotos" }]
})

type PropertieDocument  = InferSchemaType<typeof PropertieSchema>
const Propertie = model("properties", PropertieSchema)

export { Propertie, PropertieDocument}