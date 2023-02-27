import Product from "../models/product.model.js"

export const addProductController = async (req, res) => {
    //try {

        const producto = {
            nombre: "Funko POP Luke",
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste sit, esse fugit distinctio a est ex perferendis itaque consequuntur alias iure nihil, culpa nostrum quidem quod, quam sed et quisquam! consectetur adipisicing elit. Iste sit, esse fugit distinctio",
            precio: 11500,
            cover: "https://stylewatch.vtexassets.com/arquivos/ids/192242/FunkoPop_Star-Wars_Galen_889698148719_00.jpg?v=637560135271230000",
            descuento: 10,
            franquicia: "Star Wars",
            categoria: 1,
            personaje: "Luke Skywalker",
            imagenes: [
              "https://stylewatch.vtexassets.com/arquivos/ids/192274/FunkoPop_Star-Wars_Galen_889698148719_00.jpg?v=637560135408000000",
              "https://stylewatch.vtexassets.com/arquivos/ids/221893/Juguete_Funko_FNK4179_03.jpg?v=638017860673470000"
            ]
        }

        const newProduct = await Product.insert(producto)

        return res.json(
            {
                error: false,
                msg: newProduct
            }
        )
    //} catch (error) {
    //    res.json({ error: true, msg: "Error de servidor" })
   // }
}
