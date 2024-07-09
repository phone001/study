import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { SequelizeModule } from '@nestjs/sequelize';
// 시퀄라이즈를 사용할 때 nestjs에서 orm모듈을 제공하는 라이브러리

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "example",
    autoLoadModels: true, //시퀄라이즈 파일을 자동으로 로드해주는 속성
    synchronize: true,//실행할 때 데이터베이스 스키마를 동기화
    sync: { force: false } // 테이블을 초기화할지 말지
  }), ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
