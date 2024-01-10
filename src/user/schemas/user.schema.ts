/** moogonse 模型文件 */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema()
export class User {
    /** 用户名称 */
    @Prop({ require: true })
    username: string
    /** 邮箱 */
    @Prop()
    email: string
    /** 密码 */
    @Prop({ require: true })
    password: string
    /** 角色 admin 超级 normal普通*/
    @Prop({ require: true })
    role: string
    /** 状态 0 启用 1禁用 */
    @Prop()
    state: number
}

export type UserDocument = HydratedDocument<User>;
/** 导出文档模型 */
export const UserSchema = SchemaFactory.createForClass(User)