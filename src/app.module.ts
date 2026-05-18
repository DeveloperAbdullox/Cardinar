import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { BranchesModule } from './features/branches/branches.module';
import { ProductModule } from './features/products/product/products.module';
import { CategoryModule } from './features/catalog/category/category.module';
import { CarMakeModule } from './features/catalog/carmake/carMake.module';
import { CarModelModule } from './features/catalog/carModel/carModel.module';
import { ColorModule } from './features/catalog/color/color.module';
import { MaterialModule } from './features/catalog/material/material.module';
import { ArticulModule } from './features/products/articul/articul.module';
import { ImageModule } from './features/products/image/image.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthenticationModule,
    BranchesModule,
    ProductModule,
    CategoryModule,
    CarMakeModule,
    CarModelModule,
    ColorModule,
    MaterialModule,
    ArticulModule,
    ImageModule
  ],
  providers: [],
})
export class AppModule {}
