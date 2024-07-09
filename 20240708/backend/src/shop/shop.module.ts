import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shop, User } from './models/shop.model';
import { CreateShop } from './dto/shop.dto';

@Module({
  imports: [SequelizeModule.forFeature([Shop, User])],
  // 외부 모듈을 추가하는데 forFeature메서드는 테이블 정의한 모델을 전달
  // 매개변수 배열 타입으로 전달
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule { }
