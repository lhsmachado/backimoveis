import { Schema, model, InferSchemaType } from 'mongoose';

const PropertieSchema = new Schema({
    titulo: { type: String, required: true },
    modelo: { type: String, required: true, enum: ['locação', 'venda']},
    tipo: { type: String, required: true, enum: ['Terreno', 'Casa', 'Apartamento', 'Sitio', 'Sala Comercial']},
    codigo: { type: Number, default:0, unique: true},
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    UF: { type: String, required: true },
    metros2: { type: Number, default: 0 },
    descricao: { type: String, required: true },
    suite: { type: Number, default: 0 },
    quartos: {type: Number, default: 0},
    vagagaragem: {type: Number, default: 0},
    banheiros: { type: Number, default: 0},
    valorCondominio: { type: Number, default: null},
    IPTU: { type: Number, default: null},
    preco: {type: Number, default: null},
    fotos: []
},{timestamps: true})


type PropertieDocument  = InferSchemaType<typeof PropertieSchema>
const Propertie = model("properties", PropertieSchema)

export { Propertie, PropertieDocument}