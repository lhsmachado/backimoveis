import JWT from 'jsonwebtoken'
import { Bcrypt } from '../../../Utils/Bcrypt'
import { UserRepository } from '../../User/Repository/UserRepository'
import { MakeErrors } from '../../../Utils/MakeErrors/MakeErrors'
import { STATUS_CODE } from '../../../Utils/StatusCode/STATUS_CODE'

interface AuthData {
    email: string
    password: string
}

class AuthService {
    constructor(private repository: UserRepository) { }
    
    async Login(data: any) {

        try {
            const VerifyUser = await this.repository.FindByEmail(data.email);
            if(!VerifyUser) {
         return MakeErrors("E-mail ou password incorretos", STATUS_CODE.NON_AUTHORIZED)
            }
            const VerifiyPassword = Bcrypt.compare(data.password,VerifyUser.password)
       if(!VerifiyPassword){
        return MakeErrors("E-mail ou password incorretos", STATUS_CODE.NON_AUTHORIZED)
       }

    //    const {name,email} = VerifyUser
       const payload = {...VerifyUser }
       const secretKey = process.env.JWT_SECRET_KEY as string
       const options = { expiresIn: '55min'}

       const token = JWT.sign(payload,secretKey, options)

       return {token}
        } catch (error: any) {
            return MakeErrors(error.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        }
    }

}

export { AuthService }