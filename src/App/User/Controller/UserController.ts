import { Request, Response } from "express";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";
import { UserValidation } from "../../../Utils/Validation/User/UserValidation";
import { UserService } from "../Service/UserService";

class UserController {
    constructor(private service: UserService) { }

    async CreateFromController(req: Request, res: Response) {

        const { body } = req;
        console.log("Body na controller =>", body)
        const BodyVerify = await UserValidation.Verify(body);
        if (BodyVerify.error) {
            return res.status(BodyVerify.status).json(BodyVerify.error);
        }

        try {
            const UserCreate = await this.service.Create(body);
            return res.status(STATUS_CODE.OK).json({UserCreate})
        } catch (error) {
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }

    }
}


export { UserController}