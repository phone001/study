import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import * as cookie from 'cookie-parser';

@Module({
  imports: [AuthModule, SequelizeModule.forRoot({
    database: "test10",
    username: "root",
    password: "root",
    autoLoadModels: true,
    synchronize: true,
    dialect: "mysql"
  }),
    JwtModule.register({
      secret: "kim",
      signOptions: {
        expiresIn: '60m'
      }
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookie()).forRoutes("*");
  }
}
