import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    nombre: {
        type: String,
    },
    precio: {
        type: Number,
    },
    cover: {
        type: String,
    },
    descuento: {
        type: Number,
    },
    franquicia: {
        type: String,
    },
    categoria: {
        type: Number,
    },
    personajes: {
        type: String,
    },
    imagenes: {
        type: Array,
    }
})

const Product = mongoose.model('product', ProductSchema)

export default Product