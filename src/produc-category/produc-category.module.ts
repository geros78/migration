import { Module } from '@nestjs/common';
import { ProducCategoryService } from './produc-category.service';
import { ProducCategoryController } from './produc-category.controller';

@Module({
  controllers: [ProducCategoryController],
  providers: [ProducCategoryService]
})
export class ProducCategoryModule {}
