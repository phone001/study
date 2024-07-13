import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import * as cookieParser from 'cookie-parser';
import { AuthMiddleware } from './middelware/auth.middleware';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes("*")
    // auth이후의 주소는 인식하지 않음, 이후 요청까지 처리하려면 auth*로 지정해주어야 함
    consumer.apply(AuthMiddleware).forRoutes("aut*");
  }
}
