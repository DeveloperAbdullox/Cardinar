import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Articul } from "src/core/entities/articuls.entity";
import { ArticulController } from "./articul.controller";
import { ArticulCreateHandler } from "./handler/articul.create.handler";
import { ArticulListHandler } from "./handler/articul.list.handler";

@Module({
    imports : [
        TypeOrmModule.forFeature([Articul]),
        CqrsModule
    ],
    controllers: [
        ArticulController
    ],
    providers: [
        ArticulCreateHandler,
        ArticulListHandler
    ]
})

export class ArticulModule {}