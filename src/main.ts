import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**设置全局路由前缀 */
  app.setGlobalPrefix('api')
  /**  注册全局错误的过滤器 */
  //app.useGlobalFilters(new HttpExceptionFilter())
  /** 注册全局成功过滤器 */

  /** 设置Swagger文档 */
  const options = new DocumentBuilder()
    .setTitle('唯心艺术')  // 接口文档名称
    .setDescription('使用nest书写的常用性接口')//描述
    .setVersion('1.0.0') // 文档版本
    .addTag('用户,安全')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
  SwaggerModule.setup('/api-dosc', app, document);
  await app.listen(3000);
}
bootstrap();