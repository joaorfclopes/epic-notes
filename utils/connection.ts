import mongoose from 'mongoose'

const { DATABASE_URL } = process.env

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log('Mongoose Connection Established')

  const NoteSchema = new mongoose.Schema({
    title: String,
    description: String
  })

  const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema)

  return { conn, Note }
}
