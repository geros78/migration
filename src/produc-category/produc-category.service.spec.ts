import { Test, TestingModule } from '@nestjs/testing';
import { ProducCategoryService } from './produc-category.service';

describe('ProducCategoryService', () => {
  let service: ProducCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducCategoryService],
    }).compile();

    service = module.get<ProducCategoryService>(ProducCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
