import { Router } from "express";
import { loginController } from "../controllers/login.controller.js";
import { registerController } from "../controllers/register.controller.js";
import { validacionController } from "../controllers/validacion.controller.js";
import { authAdmin } from "../middlewares/verifyToken.js";

export const publicRoutes = Router()


publicRoutes.post("/api/login", (req, res) => loginController(req, res))
publicRoutes.post("/api/registro", (req, res) => registerController(req, res))
publicRoutes.post("/api/validacion", authAdmin)
