import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("text")
  getHello(): string {
    return "test"
  }

  @Get("board")
  getBoard(): string {
    return "board";
  }
}
