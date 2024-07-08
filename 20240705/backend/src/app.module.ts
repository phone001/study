import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';
import { TestModule } from './test/test.module';

// 모듈에는 메타데이터 포함된다
@Module({
  imports: [TestModule],// 현재 모듈에서 필요한 provider들의 집합
  controllers: [AppController], // 현재 모듈에 정의 된 컨트롤러의 집합
  // providers로 의존성을 주입해줬기 때문에 각 서버스에 this의 객체에 클래스를 할당해도 instance로 된다.
  providers: [AppService, AppRepository],
})
export class AppModule { }
