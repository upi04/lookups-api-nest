import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { EducationalInstitutionService } from './educational-institution.service';
import { CreateEducationalInstitutionDto } from './dto/create-educational-institution.dto';

@Controller('educational-institutions')
export class EducationalInstitutionController {
    [x: string]: any;
  constructor(private readonly service: EducationalInstitutionService) {}

 @Get()
findAll(
  @Query('page') page = '1',
  @Query('limit') limit = '10',
  @Query('search') search?: string,
): any {
  return this.EducationalInstitutionService.findAll(
    parseInt(page),
    parseInt(limit),
    search,
  );
}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateEducationalInstitutionDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<CreateEducationalInstitutionDto>,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
