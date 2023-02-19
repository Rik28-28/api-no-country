import User from "../models/user.model.js"
import encryp from "../utils/encryp.js"

export const registerController = async (req, res) => {

    try {

    const user = req.body.user
    const email = req.body.email
    const password = req.body.password

    if (!user) return res.json({ error: true, msg: "Ingrese el nombre de usuario" })
    if (!email) return res.json({ error: true, msg: "Ingrese el email" })
    if (!password) return res.json({ error: true, msg: "Ingrese el password" })

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
        if(error.keyValue?.user){
            return res.json({ error: true, msg: "Ya existe el nombre de usuario '"+ error.keyValue.user +"'" })
        }
        if(error.keyValue?.email){
            return res.json({ error: true, msg: "El email '"+ error.keyValue.email + "' esta siendo usado en otra cuenta" })
        }
        return res.json({ error: true, msg: "Error de servidor" })
    }
}