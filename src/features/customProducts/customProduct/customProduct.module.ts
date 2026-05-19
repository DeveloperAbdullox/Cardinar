import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomProduct } from "src/core/entities/customProducts.entity";
import { CustomProductController } from "./customProduct.controller";
import { CustomProductListHandler } from "./handler/customProduct.list.handler";
import { CustomProductCreateHandler } from "./handler/customProduct.create.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([CustomProduct]),
        CqrsModule
    ],
    controllers: [
        CustomProductController
    ],
    providers: [
        CustomProductListHandler,
        CustomProductCreateHandler
    ]
})

export class CustomProductModule {}