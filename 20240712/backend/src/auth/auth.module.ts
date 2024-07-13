import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  // jwt.sign({},{secret:"key",expired:3000})
  imports: [JwtModule.register({ secret: "myKey" })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
