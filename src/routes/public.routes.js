import { Router } from "express";
import { addProductController } from "../controllers/add.products.controller.js";
import { getProductController } from "../controllers/get.products.controller.js";
import { loginController } from "../controllers/login.controller.js";
import { registerController } from "../controllers/register.controller.js";
import { authAdmin } from "../middlewares/verifyToken.js";

export const publicRoutes = Router()


publicRoutes.post("/api/login", (req, res) => loginController(req, res))
publicRoutes.post("/api/registro", (req, res) => registerController(req, res))
publicRoutes.get("/api/getproductos", (req, res) => getProductController(req, res))
publicRoutes.post("/api/addproductos", (req, res) => addProductController(req, res))
publicRoutes.post("/api/validacion", authAdmin)
