import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomersModule } from './customers/customers.module';
import { ProducCategoryModule } from './produc-category/produc-category.module';
import { ProductsModule } from './products/products.module';
import { User } from './users/entities/user.entity';
import { Products } from './products/entities/product.entity';
import { ProducCategory } from './produc-category/entities/produc-category.entity';
import { Employees } from './employees/entities/employee.entity';
import { Customers } from './customers/entities/customer.entity';

@Module({
  imports: [UsersModule, 
    EmployeesModule, 
    CustomersModule, 
    ProducCategoryModule, 
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Aa123456',
      database: 'migration',
      entities: [
        User, Products, ProducCategory, Employees, Customers
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
