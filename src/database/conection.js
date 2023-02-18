import mongoose from "mongoose"
import { MONGODB_URI } from "../config.js"


export const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(MONGODB_URI, {
            
        }).then(() => {
            console.log('Conectado a la base de datos.')
        })
    } catch (error) {
        console.log(error)
    }
}