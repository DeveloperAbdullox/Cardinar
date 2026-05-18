import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Color } from "src/core/entities/colors.entity";
import { ColorController } from "./color.controller";
import { ColorCreateHandler } from "./handler/color.create.handler";
import { ColorListHandler } from "./handler/color.list.handler";

@Module({
    imports : [
        TypeOrmModule.forFeature([Color]),
        CqrsModule
    ],
    controllers: [
        ColorController
    ],
    providers: [
        ColorCreateHandler,
        ColorListHandler
    ]
})

export class ColorModule {}