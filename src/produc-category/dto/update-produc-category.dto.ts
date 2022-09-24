import { PartialType } from '@nestjs/mapped-types';
import { CreateProducCategoryDto } from './create-produc-category.dto';

export class UpdateProducCategoryDto extends PartialType(CreateProducCategoryDto) {}
