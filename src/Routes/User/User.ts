import { Router } from "express";
import { UserModel } from "../../App/User/UserModule";

const userRoutes = Router();
const controller = UserModel.getInstance();

userRoutes.post("/register", controller.CreateFromController.bind(controller))

export { userRoutes }