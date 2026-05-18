import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/core/entities/product.entity";
import { ProductCreateHandler } from "./handler/product.create.handler";
import { ProductController } from "./products.controller";
import { ProductListHandler } from "./handler/product.list.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        CqrsModule
    ],
    controllers: [
        ProductController
    ],
    providers: [
        ProductCreateHandler,
        ProductListHandler
    ]
})

export class ProductModule {}