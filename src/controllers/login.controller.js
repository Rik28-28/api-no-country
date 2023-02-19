import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import { KEYSECRETTOKEN } from "../config.js"
import bcrypt from 'bcrypt'

export const loginController = async (req, res) => {
    try {

    const user = req.body.user
    const password = req.body.password

    if (!user) return res.json({ error: true, msg: "Nombre de usuario no ingresado" })
    if (!user) return res.json({ error: true, msg: "Contraseña no ingresada" })
    
    let userFound = await User.findOne({ "user": user })
    if (!userFound) return res.json({ error: true, msg: "El usuario no existe" })

    const result = bcrypt.compareSync(password.toString(), userFound.password)
    if (!result) return res.json({ error: true, msg: "Contraseña incorrecta" })


    var token = jwt.sign({ user: userFound.user }, KEYSECRETTOKEN, { expiresIn: 300 })

    return res.json(
        {
            error: false,
            msg: {
                username: user,
                token
            }
        }
    )

    } catch (error) {

        res.json({ error: true, msg: "Error de servidor" })

    }
}

