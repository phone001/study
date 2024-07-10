import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { z } from 'zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // 데이터를 검증하고 파싱을 하기 위해 사용할 라이브러리
  // zod스키마의 정의를 검증하기 위해서 사용

  // 객체의 형태를 검증할 때 사용

  // 객체의 형태를 정의
  const userDTO = z.object({
    // 문자 데이터 타입
    // 객체의 키의 이름은 name
    name: z.string(),

    // 길이가 있으면 
    // min(원하는 길이)
    // max(원하는 길이)
    age: z.number().min(3).max(100)
    // 컨트롤러 로직이 실행되기 전에 불필요하게 실행되는 로직을 방지
  });

  // 객체의 형태를 검증
  // safeParse는 zod에서 제공하는 메서드
  // 데이터를 검증하고 검증된 결과를 promise로 반환
  // 항목이 추가되는 것은 상관없지만 필수값이 빠지면 에러발생
  const result = userDTO.safeParse({
    // 입력받은 객체의 값
    name: 'kim',
    age: 50,
    emain: ""
  })

  if (result.success) {
    // 성공의 결과
    console.log(result.data);
  } else {
    // 실패의 결과 
    console.log(result.error);
  }

}
bootstrap();
