import { ApiProperty } from "@nestjs/swagger";

/** 登录类型 */
export class LoginParams {
    @ApiProperty({ description: '用户名称' })
    username: string;
    @ApiProperty({ description: '用密码' })
    password: string;
}