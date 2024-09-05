import { Req, Res, Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/create-auth.dto';
import { Response, Request } from 'express';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async create(@Body() userDTO: typeof UserDTO, @Res() res: Response) {
    const userInfo = await this.authService.create(userDTO);
    if (!userInfo) res.status(409).send();
    res.send(userInfo).status(201);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Post('login')
  async findOne(@Body('userID') id: string, @Body("userPW") upw: string, @Res() res: Response) {
    const data = await this.authService.findOne(id, upw);

    if (!data) return res.status(409).send("계정 없음");

    const date = new Date();
    date.setMinutes(date.getMinutes() + 60);
    res.cookie("token", data["token"], { httpOnly: true, expires: date })
    return res.send(data);
  }
  @Post("logout")
  logout(@Req() req: Request, @Res() res: Response) {
    try {
      console.log("test");
      res.clearCookie("token")
      return res.send().status(200);
    } catch (e) {
      console.log(e);
    }
  }

}
