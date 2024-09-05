import { Auth } from "./entities/auth.entity";
import { InjectModel } from "@nestjs/sequelize";

export class AuthModel {
    constructor(@InjectModel(Auth) private readonly model: typeof Auth) { }
    async create(userDTO: any) {
        return await this.model.create(userDTO);
    }
    async findOne(userID: string) {
        return await this.model.findOne({ where: { userID } });
    }
    async findAll() {
        return await this.model.findAll();
    }
}