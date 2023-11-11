import mongoose, { InferSchemaType } from "mongoose";

const PhotoSchema = new mongoose.Schema({
<<<<<<< HEAD
  filename: { type: String, required: true },
  mimetype: { type: String, required: true },
=======
  filename: { type: String},
  mimetype: { type: String},
>>>>>>> master
}, { timestamps: true })

type IPhoto = InferSchemaType<typeof PhotoSchema>

const Photo = mongoose.model("propertiesphotos", PhotoSchema)

export {
  Photo,
  IPhoto
}