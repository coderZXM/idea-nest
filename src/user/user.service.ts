import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { LoginParams } from './user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }
    /** 登录接口 */
    async login(body: LoginParams) {
        const { username, password } = body
        const query = {
            username,
            password
        }
        const data = await this.userModel.find(query).exec()
        console.log(data)

    }

}
