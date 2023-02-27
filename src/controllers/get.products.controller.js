import Product from "../models/product.model.js"

export const getProductController = async (req, res) => {
    try {
        const products = await Product.find()
        return res.json(
            {
                error: false,
                msg: {
                    products
                }
            }
        )
    } catch (error) {
        res.json({ error: true, msg: "Error de servidor" })
    }
}

