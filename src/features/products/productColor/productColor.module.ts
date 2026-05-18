import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductColor } from "src/core/entities/productColors.entity";
import { ProductColorController } from "./productColor.controller";
import { ProductColorCreateHandler } from "./handler/productColor.create.handler";
import { ProductColorListHandler } from "./handler/productColor.list.query";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductColor]),
        CqrsModule
    ],
    controllers: [
        ProductColorController
    ],
    providers: [
        ProductColorCreateHandler,
        ProductColorListHandler
    ]
})

export class ProductColorModule {}