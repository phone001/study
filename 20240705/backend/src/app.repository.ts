import { Injectable } from '@nestjs/common'

@Injectable()
export class AppRepository {
    getString(): string {
        return "이게되나";
    }
}