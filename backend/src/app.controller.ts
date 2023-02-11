import { Controller, Post, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';

type CreatePetDto = {
  name: string;
  dob?: Date;
  photo?: string;
  neutered?: boolean;
  race?: string;
  gender?: string;
};

@Controller('pets')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() petDto: CreatePetDto): any {
    return this.appService.create(petDto);
  }

  @Get()
  getAll(): any {
    return this.appService.getAll();
  }

  @Get('/races')
  getAllCatRaces(): any {
    return this.appService.getAllCatsRaces();
  }
}
