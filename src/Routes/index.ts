import { Router } from "express";
import { userRoutes } from "./User/User";
import { AuthRoute } from "./Auth/Auth";
import { PropertieRoute } from "./Properties/Properties";


const routes = Router();
routes.use("/user", userRoutes)
routes.use("/auth", AuthRoute);
routes.use("/properties", PropertieRoute);

export {routes}