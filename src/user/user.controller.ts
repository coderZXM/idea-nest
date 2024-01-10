import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginParams } from './user.interface';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('用户信息')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/login')
    @ApiOperation({ summary: '用户登录' })
    async Login(@Body() loginParams: LoginParams) {
        await this.userService.login(loginParams)
    }

}
