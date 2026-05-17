import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarMake } from "src/core/entities/carMakes.entity";
import { CarMakeCreateHandler } from "./handler/carMake.create.handler";
import { CarMakeController } from "./carMake.controller";
import { CarMakeListQuery } from "./query/carMake.list.query";

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
        CarMakeListQuery
    ]
})

export class CarMakeModule {}