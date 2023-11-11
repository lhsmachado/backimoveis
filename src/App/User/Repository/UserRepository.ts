import { Model } from "mongoose";
import { UserDocument } from "../Entities/UserSchema";
import { MakeErrors } from "../../../Utils/MakeErrors/MakeErrors";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";


class UserRepository {
    constructor(private userModel: Model<UserDocument>){}

    async Create(data: UserDocument){
        return await this.userModel.create(data)
    }

    async FindByEmail(email: string){
        return await this.userModel.findOne({email})
    }

}
export {UserRepository};