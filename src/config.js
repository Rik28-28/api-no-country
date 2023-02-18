import * as dotenv from "dotenv"
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path:__dirname + '/.env' })

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://robert:04hfDfLOndHtcgd0@cluster0.npkfkpc.mongodb.net/?retryWrites=true&w=majority"
export const PORT = process.env.PORT || 5000
export const KEYSECRETTOKEN = process.env.KEYSECRETTOKEN  || "NOCOUNTRY-PROYECT"