import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Material } from "src/core/entities/materials.entity";
import { MaterialController } from "./material.controller";
import { MaterialCreateHandler } from "./handler/material.create.handler";
import { MaterialListHandler } from "./handler/material.list.handler";

@Module({
    imports : [
        TypeOrmModule.forFeature([Material]),
        CqrsModule
    ],
    controllers: [
        MaterialController
    ],
    providers: [
        MaterialCreateHandler,
        MaterialListHandler
    ]
})

export class MaterialModule {}