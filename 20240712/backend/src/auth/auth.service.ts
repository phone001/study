import { Injectable } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

// Injectable 의존성을 주입 받겠다.
@Injectable()
export class AuthService {
    constructor(private readonly jwt: JwtService) {

    }
    signToken(id: string, age: number) {
        const payload = { id, age };
        return this.jwt.sign(payload, { expiresIn: 60 * 10 * 1000 });
    }
    verifyToken(jwt: string) {
        return this.jwt.verify(jwt);
    }
}
