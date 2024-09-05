import { Req, Res, Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO, LoginDTO } from './dto/create-auth.dto';
import { Response, Request } from 'express';
import { AuthPipe } from './pipe/auth.pipe';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guard/auth.guard'


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post('signup')
  async create(@Body(new AuthPipe(UserDTO)) userDTO: typeof UserDTO, @Res() res: Response) {
    const userInfo = await this.authService.create(userDTO);
    if (!userInfo) res.status(409).send();
    res.send(userInfo).status(201);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Post('login')
  async findOne(@Body(new AuthPipe(LoginDTO)) loginData: any, @Res() res: Response) {
    const { userID: id, userPW: pw } = loginData;
    const data = await this.authService.findOne(id, pw);

    if (!data) return res.status(409).send("계정 없음");

    const date = new Date();
    date.setMinutes(date.getMinutes() + 60);
    res.cookie("token", data["token"], { httpOnly: true, expires: date })
    return res.send(data);
  }


  @UseGuards(AuthGuard)
  @Post("logout")
  logout(@Res() res: Response) {
    try {

      res.clearCookie("token");
      return res.send().status(200);
    } catch (e) {
      console.log(e);
    }
  }

}
