import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { BranchesModule } from './features/branches/branches.module';
import { ProductModule } from './features/products/products.module';
import { CategoryModule } from './features/catalog/category/category.module';
import { CarMakeModule } from './features/catalog/carmake/carMake.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthenticationModule,
    BranchesModule,
    ProductModule,
    CategoryModule,
    CarMakeModule
  ],
  providers: [],
})
export class AppModule {}
