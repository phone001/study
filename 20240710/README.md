# nestjs 요청 주기
> 사용자 서버 요청 -> 미들웨어 -> 가드 ->인터셉터 -> 파이프 -> 컨트롤러(서비스,레포지토리) -> exception ->응답 

# Pipe
> 파이프는 내부적으로 검증이나 변환을 지원한다.
> class 데코레이터를 사용한 프로바이더
> 값의 변환과 검증을 처리해주는 로직을 담당
> 값이 유효한지 검증을 하고 잘 완료되면 값을 그대로 사용하고 
> 그렇지 않으면 에러를 발생시킨다.
> 메서드가 호출되기 전에 파이프를 실행하고 파이프에서 처리후에  메서드 호출 전에 에러를 발생시킬 수 있다.
> 파이프는 예외처리를 실행하고 파이프가 throw로 error의 객체를 반환하면 컨트롤러의 메서드가 호출되지 않게 하고 
> 에러메시지를 어떤 에러인지 명확하게 모니터링 할 수 있다.

## 컨트롤러
```ts
@Get(":index")
findNumberIndex(@Param("index",ParseIntPipe) id :number){
    // Params 값을 구조분해 할당하면 데이터타입 문자형
    console.log(`파라미너의 값은 ${id}`);
    // 문자형 string
    return typeof id;
}
```

## nestjs에 내부 파이프
- ParseIntPipe
> 전달한 값이 숫자로 변환할 수 있는지 판단하고 
> 변환할 수 없으면 에러메시지를 응답한다.

## 파이프의 종류
1. ValidationPipe
2. ParseIntPipe
> 정수형 
3. ParseFloatPipe
> 실수형
4. ParseBoolPipe
> 참 거짓 판단
5. ParseArrayPipe
> 배열
6. ParseUUIDPipe
> UUID
7. ParseEnumPipe
> 
8. DefaultValuePipe
9. ParseFilePipe

## 커스텀 파이프
> 커스텀 파이프를 만들 때 형태를 상속 PipeTransform


### 실습
1. 유저의 이름을 받고 파이프 처리를 해서 
 유저의 이름이 문자형 타입이면 숫자포함X
 문자형 타입이고 최소 3자 이상 5자 이하

2. zod Post요청 확인
3. 게시판 유저
4. pipe로 dto까지 구현