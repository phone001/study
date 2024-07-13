# nestjs guard, intercepter. middleware

## guard
> 가드가 하는 역할은 인증 권한 부여의 로직을 처리할 때
> 컨트롤러의 로직을 실행하기 전에 

1. 요청의 유효성 검사
2. 사용자의 인증 정보를 확인
3. 컨트롤러 로직의 접근제어

```ts
// CanAcivate
// 가드를 만들 때 형태를 상속받을 interface
class UserTokenGuard implements CanAcivate{
    // ExcutionContext
    // 요청에 대한 내용을 어떻게 받을지 메서드를 통해서 원하는 형태를 받을 수 있다.
    // http요청의 내용을 받고싶다.
    // rpc 원격 프로시저 호출할 때 
    // 웹소켓 요청 ws
    canActivate (context:ExcutionContext){
        // http 요청의 내용을 가지고 오고 싶으면
        const req = context.wsitchToHttp().getRequest();

        if(!req.User){
            throw new UnauthorriedException("권한이 없음");
        }
        return true;
    }
}
```

```sh
npm i @nestjs/jwt
```

## 인터셉터
> 요청과 응답의 내용을 받아올 수 있다.
> 로깅이나 캐싱등의 작업에 사용할 수 있다.
1. 요청 메시지의 로직을 삽입할 수 있다
2. 응답 메시지의 내용을 수정할 수 있다.
3. 메서드가 실행된 시간을 로깅할 수 있다.
4. 어떤 메서드 실행인지도.

## 미들웨어
> 요청과 응답간에 처리할 로직