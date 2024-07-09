import { Injectable } from '@nestjs/common';
import { Shop } from './models/shop.model';
import { CreateShop } from './dto/shop.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable() // 의존성 주입 데코레이터
export class ShopService {

    constructor(@InjectModel(Shop) private readonly shopModel: typeof Shop) {

    }
    create(createShop: CreateShop): Promise<Shop> {
        const { name, price } = createShop
        return this.shopModel.create({ name, price });
    }
    async findId(id: string): Promise<Shop> {
        return this.shopModel.findOne({ where: { id } })
    }
    async findAll(): Promise<Shop[]> {
        return this.shopModel.findAll();
    }

}
