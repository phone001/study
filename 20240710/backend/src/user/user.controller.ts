import { Controller, Param, Get, ParseIntPipe, HttpStatus, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserNamePipe, UserNameMinCount, UserNameMaxCount, StringCheck, UserLoginObjectPipe } from 'src/pipe/user.pipe';
import { userDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  // @Get(":index")
  // //findNumberIndec(@Param("index", ParseIntPipe) index: number): any {
  // // ParseIntPipe통해 값을 변환하는데 
  // // 지정된 타입으로 변환할 수 없다면 400에러를 호출
  // // 400에러는 리소스에 의해 요청을 처리할 수 없거나 하지 않음을 의미
  // findNumberIndec(@Param("index", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) index: number): any {
  //   console.log(index)
  //   return typeof index;
  // }
  @Get(":index")
  findNumberIndex(@Param("index", StringCheck) index: number) {
    console.log(index);
    return index;
  }

  // body의 구조분해할당하는 부분은 pipe로 검증 
  // body의 일부가 아닌 전체를 검증
  @Post("loginUser")
  login(@Body(new UserLoginObjectPipe(userDTO)) body: any) {
    // 불필요하게 실행되는 로직을 제거할 수 있고 파싱되는 값을 사용할 수 있다.
  }
}
