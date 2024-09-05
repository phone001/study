import { Injectable } from "@nestjs/common";
import { AuthModel } from './auth.model';
import { UserDTO } from "./dto/create-auth.dto";
import { AuthModule } from "./auth.module";

@Injectable()
export class AuthRepository {
    constructor(private readonly authModel: AuthModel) {

    }
    async create(userDTO: typeof UserDTO) {
        return await this.authModel.create(userDTO);
    }
    async findAll() {
        return await this.authModel.findAll();
    }
    async findOne(id: string) {
        return await this.authModel.findOne(id);
    }
}