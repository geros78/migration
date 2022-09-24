import { Test, TestingModule } from '@nestjs/testing';
import { ProducCategoryController } from './produc-category.controller';
import { ProducCategoryService } from './produc-category.service';

describe('ProducCategoryController', () => {
  let controller: ProducCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducCategoryController],
      providers: [ProducCategoryService],
    }).compile();

    controller = module.get<ProducCategoryController>(ProducCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
