import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DBHOST, DBNAME, DBPORT } from './config/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';


@Module({
  /** 连接mongodb数据库 */
  imports: [UserModule, MongooseModule.forRoot(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)],
  controllers: [AppController],
  /** 注册全局成功与失败的拦截器 */
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: TransformInterceptor,
  },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },],
})
export class AppModule { }
