import { Router } from "express";
import { AuthModel } from "../../App/Auth/AuthModule";

const AuthRoute = Router();
const Controller = AuthModel.getInstance();

AuthRoute.post('/', Controller.LoginController.bind(Controller));

export {AuthRoute }