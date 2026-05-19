import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StaticInfo } from "src/core/entities/staticInfo.entity";
import { StaticInfoController } from "./staticInfo.controller";
import { StaticInfoListHandler } from "./handler/staticInfo.list.handler";
import { StaticInfoCreateHandler } from "./handler/staticInfo.create.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([StaticInfo]),
        CqrsModule
    ],
    controllers: [
        StaticInfoController
    ],
    providers: [
        StaticInfoListHandler,
        StaticInfoCreateHandler
    ]
})

export class StaticInfoModule {}