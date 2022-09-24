import { Injectable } from '@nestjs/common';
import { CreateProducCategoryDto } from './dto/create-produc-category.dto';
import { UpdateProducCategoryDto } from './dto/update-produc-category.dto';

@Injectable()
export class ProducCategoryService {
  create(createProducCategoryDto: CreateProducCategoryDto) {
    return 'This action adds a new producCategory';
  }

  findAll() {
    return `This action returns all producCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producCategory`;
  }

  update(id: number, updateProducCategoryDto: UpdateProducCategoryDto) {
    return `This action updates a #${id} producCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} producCategory`;
  }
}
