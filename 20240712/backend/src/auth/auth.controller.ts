import { Controller, UseGuards, Get, Body, Post, Res, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TokenGuard } from './guard/token.guard';
import { Response } from 'express';
import { AuthInterceptor } from './intercepter/auth.intercepter';

// auth까지 요청을 보냈을 때
@UseInterceptors(AuthInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  findUser() {
    return;
  }
  @UseGuards(TokenGuard)
  @Get('login')
  login() {
    return "로그인 완료"
  }

  @Post("userToken")
  token(@Body("id") id: string, @Body("age") age: number, @Res() res: Response) {
    const token = this.authService.signToken(id, age);
    const date = new Date();
    const cookieDate = new Date(date.setDate(date.getMinutes() + 60));
    res.cookie("token", token, { httpOnly: true, expires: cookieDate });
    return res.send({ message: "로그인 성공" })
  }
}