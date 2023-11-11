import { Schema, model, InferSchemaType } from 'mongoose';


const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
<<<<<<< HEAD
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'properties', default: null }],
    adm: {type: Boolean, default: false}
=======
    phone: { type: String, required: true},
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'properties', default: null }],
    isAdm: {type: Boolean, default: false}
>>>>>>> master
})

type UserDocument  = InferSchemaType<typeof userSchema>
const User = model("propertiesusers", userSchema)

export { User, UserDocument };