import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { BranchesModule } from './features/branches/branches.module';
import { ProductModule } from './features/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthenticationModule,
    BranchesModule,
    ProductModule
  ],
  providers: [],
})
export class AppModule {}
