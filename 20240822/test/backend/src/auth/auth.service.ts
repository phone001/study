import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/create-auth.dto';
import { AuthRepository } from './auth.repository';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly authRepo: AuthRepository, private readonly jwt: JwtService) {

  }
  async create(userDTO: typeof UserDTO) {
    console.log(userDTO)

    const userInfo = await this.authRepo.findOne(await userDTO["userID"]);

    if (userInfo) return null;

    userDTO["userPW"] = await hash(userDTO["userPW"], 10);
    console.log(await userDTO["userPW"])
    return await this.authRepo.create(userDTO);
  }

  async findAll() {
    return await this.authRepo.findAll();
  }

  async findOne(id: string, pw: string) {
    const info = await this.authRepo.findOne(id);
    if (!info) return info;

    const { userPW } = info.dataValues;
    const authResult = await compare(pw, userPW);

    if (!authResult) return info;
    const userInfo = {
      user: info.dataValues.userID,
    }
    const token = await this.jwt.signAsync(userInfo);
    return { token, info };
  }
}
