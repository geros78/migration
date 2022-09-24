import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProducCategoryService } from './produc-category.service';
import { CreateProducCategoryDto } from './dto/create-produc-category.dto';
import { UpdateProducCategoryDto } from './dto/update-produc-category.dto';

@Controller('produc-category')
export class ProducCategoryController {
  constructor(private readonly producCategoryService: ProducCategoryService) {}

  @Post()
  create(@Body() createProducCategoryDto: CreateProducCategoryDto) {
    return this.producCategoryService.create(createProducCategoryDto);
  }

  @Get()
  findAll() {
    return this.producCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProducCategoryDto: UpdateProducCategoryDto) {
    return this.producCategoryService.update(+id, updateProducCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producCategoryService.remove(+id);
  }
}
