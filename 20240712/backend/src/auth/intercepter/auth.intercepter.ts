import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map, tap } from "rxjs";
// rxjs interator를 극한으로 사용할 수 있다.
export class AuthInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        // Observable 비동기 스트림 작업을 처라하는 객체
        // 요청이 들어오면 접근의 인터페이스를 제공
        // next핸들러 ㅎ마수를 매개변수로 전달하는 메서드를 제공
        // 요청 핸들러를 래핑하는 인터페이스 매개변수 순서로 호출이 된다.

        // 요청이 들어오면 어떤 요청인지 그리고 시간을 얼마나 되는지
        const date = new Date();
        // http요청 객체를 가져오자
        const req = context.switchToHttp().getRequest();
        const log = `${req.originalUrl} ${date.toLocaleString()}`
        // next.handle은 다음 핸들러로 요청을 보내는 함수
        // pipe 응답이 반환될 때 값을 tap에 전달한다.
        // tap은 Observable의 작업을 할 수 있게 한다.
        // next.handle() 라우터의 요청의 로직이 처리된 다음 실행한다.
        return next.handle().pipe(
            tap(() => {
                const date2 = new Date();
                const time = date2.getTime() - date.getTime() + "ms";
                console.log(log, time)
            }),
            map((data) => ({ mykey: 'kim', data }))
        );
    }
}