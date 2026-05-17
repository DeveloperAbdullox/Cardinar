import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarMake } from "src/core/entities/carMakes.entity";
import { CarMakeCreateHandler } from "./handler/carMake.create.handler";
import { CarMakeController } from "./carMake.controller";
import { CarMakeListHandler } from "./handler/carMake.list.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([CarMake]),
        CqrsModule
    ],
    controllers: [
        CarMakeController
    ],
    providers: [
        CarMakeCreateHandler,
        CarMakeListHandler
    ]
})

export class CarMakeModule {}