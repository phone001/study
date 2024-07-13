import { CanActivate, ExecutionContext, Inject, Injectable, NestModule, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from 'rxjs';
import { AuthService } from "../auth.service";

@Injectable()
export class TokenGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {

    }
    canActivate(context: ExecutionContext): boolean {
        const { cookies: { token } } = context.switchToHttp().getRequest();
        console.log()
        if (!token) {
            throw new UnauthorizedException('토근이 없어');
        }
        // 서비스 로직
        const auth = this.authService.verifyToken(token)
        console.log(auth);
        return true;
    }
}