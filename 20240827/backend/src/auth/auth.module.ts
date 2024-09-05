import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auth } from './entities/auth.entity';
import { AuthRepository } from './auth.repository';
import { AuthModel } from './auth.model';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [SequelizeModule.forFeature([Auth]), JwtModule.register({
    secret: "kim",
    signOptions: {
      expiresIn: '60m'
    }
  })],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, AuthModel, AuthGuard],
})
export class AuthModule { }
