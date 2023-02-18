import express from "express"
import { PORT } from "./config.js"
import { publicRoutes } from "./routes/public.routes.js"
import { connectDB } from './database/conection.js'
import cors from "cors"

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(publicRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})