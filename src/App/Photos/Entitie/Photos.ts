import mongoose, { InferSchemaType } from "mongoose";

const PhotoSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  mimetype: { type: String, required: true },
}, { timestamps: true })

type IPhoto = InferSchemaType<typeof PhotoSchema>

const Photo = mongoose.model("propertiesphotos", PhotoSchema)

export {
  Photo,
  IPhoto
}