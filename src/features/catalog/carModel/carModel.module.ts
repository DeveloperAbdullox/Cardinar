import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarModel } from "src/core/entities/carModels.entity";
import { CarModelCreateHandler } from "./handler/carModel.create.handler";
import { CarModelController } from "./carModel.controller";
import { CarModelListHandler } from "./handler/carModel.list.handler";

@Module({
    imports : [
        TypeOrmModule.forFeature([CarModel]),
        CqrsModule
    ],
    controllers: [
        CarModelController
    ],
    providers: [
        CarModelCreateHandler,
        CarModelListHandler
    ]
})

export class CarModelModule {}