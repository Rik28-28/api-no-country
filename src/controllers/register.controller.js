import User from "../models/user.model.js"
import encryp from "../utils/encryp.js"

export const registerController = async (req, res) => {

    try {

    const user = req.body.user
    const email = req.body.email
    const password = req.body.password
    var passwordEncrypt = undefined
    if (password) { passwordEncrypt = await encryp(password) }

    const newUser = new User({
        user,
        email,
        password: passwordEncrypt
    })
    const accountCreated = await newUser.save()

    res.json({ error: false, msg: "Datos registrados correctamente" })

    } catch (error) {
        res.json({ error: true, msg: error })
    }
}