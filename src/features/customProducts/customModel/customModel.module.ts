import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomModel } from "src/core/entities/customModels.entity";
import { CustomModelController } from "./customModel.controller";
import { CustomModelListHandler } from "./handler/customModel.list.handler";
import { CustomModelCreateHandler } from "./handler/customModel.create.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([CustomModel]),
        CqrsModule
    ],
    controllers: [
        CustomModelController
    ],
    providers: [
        CustomModelListHandler,
        CustomModelCreateHandler
    ]
})

export class CustomModelModule {}