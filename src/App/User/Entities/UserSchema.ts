import { Schema, model, InferSchemaType } from 'mongoose';


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true},
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'properties', default: null }],
    isAdm: {type: Boolean, default: false}
})

type UserDocument  = InferSchemaType<typeof userSchema>
const User = model("propertiesusers", userSchema)

export { User, UserDocument };