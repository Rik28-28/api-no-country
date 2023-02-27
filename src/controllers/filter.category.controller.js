import Product from "../models/product.model.js"

const filterCategoryController = async () => {
    try {
        const productFilter = await Product.find({ [req.body.category]: req.body.value })
        return res.json(
            {
                error: false,
                msg: productFilter
            }
        )
    } catch (error) {
        res.json({ error: true, msg: "Error de servidor" })
    }
}

export default filterCategoryController