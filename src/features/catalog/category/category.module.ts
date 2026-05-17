import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/core/entities/categories.entity";
import { CategoryCreateHandler } from "./handler/category.create.handler";
import { CategoryController } from "./category.controller";
import { CategoryListHandler } from "./handler/category.list.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([Category]),
        CqrsModule
    ],
    controllers: [
        CategoryController
    ],
    providers: [
        CategoryCreateHandler,
        CategoryListHandler
    ]
})

export class CategoryModule {}