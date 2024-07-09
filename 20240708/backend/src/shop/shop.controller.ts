import { Controller, Post, Body, Get, Param, Render, Redirect, Res, Query } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShop } from './dto/shop.dto';
import { Shop } from './models/shop.model';
import { Response } from 'express';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) { }

  @Post("create")
  @Redirect(`/shop/`)
  async create(@Body() CreateShopDTO: CreateShop, @Res() res: Response, @Query("id") url: string) {
    const { id } = await this.shopService.create(CreateShopDTO);
    return { url: `/shop/${id}` }
    //return res.redirect(`/shop/${id}`);
    // 리다리엑트
    // viewPage로 이동
  }

  // const a = request.params;
  // const {id} = request.params;
  @Get(":id")
  @Render("index.ejs")
  async findIndex(@Param("id") id: string) {
    const data = await this.shopService.findId(id);
    return { data }
  }
}
