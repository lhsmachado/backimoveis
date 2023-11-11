import { AuthController } from "./Controller/AuthController";
import { AuthService } from "./Service/AuthService";
import { UserRepository } from "../User/Repository/UserRepository";
import { User } from "../User/Entities/UserSchema";

class AuthModel {
    static getInstance() {
        const repository = new UserRepository(User);
        const service = new AuthService(repository);
        const controller = new AuthController(service);
        return controller;;
    }
}

export { AuthModel}