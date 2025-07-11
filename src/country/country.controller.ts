import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, Query } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto'; 
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// ✅ import DTO
@UseGuards(JwtAuthGuard)
@Controller('countries')
@UseGuards(JwtAuthGuard)
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

@Get()
findAll(
  @Query('page') page: string = '1',
  @Query('limit') limit: string = '10',
  @Query('search') search?: string,

): Promise<{ data: any; total: any; page: number; lastPage: number; }> {
  return this.countryService.findAll(Number(page), Number(limit) ,search,);
}
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCountryDto) {
    return this.countryService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<CreateCountryDto>, 
  ) {
    return this.countryService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.delete(id);
  }
}
