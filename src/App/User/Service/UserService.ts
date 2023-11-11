import { MakeErrors } from "../../../Utils/MakeErrors/MakeErrors"
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE"
import { UserRepository } from "../Repository/UserRepository";
import { Bcrypt } from "../../../Utils/Bcrypt";
import { UserDocument } from "../Entities/UserSchema";



class UserService {
    constructor(private userRepository: UserRepository) { }

    async Create(body: UserDocument) {
        try {
            const VerifyEmail = await this.userRepository.FindByEmail(body.email);
            if (VerifyEmail) {
                return MakeErrors("Usuário já existe", STATUS_CODE.BAD_REQUEST)
            }
            const hashedPassword = Bcrypt.encrypt(body.password);
            body.password = hashedPassword;

            const UserCreate = await this.userRepository.Create(body);
            return UserCreate;

        } catch (error: any) {
            return MakeErrors("Erro interno no servidor", STATUS_CODE.BAD_REQUEST);
        }
    }
}

export { UserService } 