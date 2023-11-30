import { Schema, model, InferSchemaType } from 'mongoose';

const PropertieSchema = new Schema({
    titulo: { type: String, required: true },
    modelo: { type: String, required: true, enum: ['locação', 'venda']},
    tipo: { type: String, required: true, enum: ['Terreno', 'Casa', 'Apartamento', 'Sitio', 'Sala Comercial']},
    codigo: { type: Number, default:0, unique: true},
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    UF: { type: String, required: true },
    metros2: { type: String, defaul: 0 },
    descricao: { type: String, required: true },
    suite: { type: String, default: 0 },
    quartos: {type: String, default: 0},
    vagagaragem: {type: String, default: 0},
    banheiros: { type: String, default: 0},
    valorCondominio: { type: String, default: null},
    IPTU: { type: String, default: null},
    precoAluguel: {type: String, default: null},
    precoVenda: {type: String, default: null},
    fotos: []
},{timestamps: true})


type PropertieDocument  = InferSchemaType<typeof PropertieSchema>
const Propertie = model("properties", PropertieSchema)

export { Propertie, PropertieDocument}