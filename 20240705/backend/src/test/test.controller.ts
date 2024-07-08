import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

interface IItem {
  name: string;
  price: number;
}
const Items: IItem[] = [];

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  // @body가 요청의 body의 데이터
  @Post('create')
  create(@Body("name") name: string, @Body("price") price: number) {
    Items.push({ name, price })
    return Items; // return이 응답
  }

  @Get()
  findAll() {
    return Items;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body("name") name: string, @Body("price") price: number) {
    Items[id] = { name, price }
    return;
  }

  @Put(':id')
  updatea(@Param('id') id: string, @Body("name") name: string, @Body("price") price: number) {
    Items[id] = { name, price }
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
