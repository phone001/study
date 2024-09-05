import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate {
    // constructor(private jwt: JwtService) {
    //     this.jwt = jwt;
    // }
    canActivate(context: ExecutionContext): boolean {
        try {

            const { cookies: { token } } = context.switchToHttp().getRequest();

            if (!token)
                throw new UnauthorizedException("token is not defind");
            // const data = this.jwt.verify(token);
            return true
        } catch (error) {
            const res = context.switchToHttp().getResponse();
            console.log(error)
            return res.send("token error").status(401);
        }

    }
}