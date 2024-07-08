import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 서버객체
  const app = await NestFactory.create(AppModule);
  //app.enableCors();
  app.enableCors({
    origin: "http://127.0.0.1:5500",
    methods: ["get", "post", "PATCH", "PUT"],
    credentials: true
  });
  // 서버실행
  await app.listen(3000);
}
bootstrap();
