import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Request } from "../../core/entities/requests.entity"
import { CqrsModule } from "@nestjs/cqrs";
import { RequestController } from "./request.controller";
import { RequestListHandler } from "./handler/request.list.handler";
import { RequestCreateHanler } from "./handler/request.create.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([Request]),
        CqrsModule
    ],
    controllers: [
        RequestController
    ],
    providers: [
        RequestListHandler,
        RequestCreateHanler
    ]
})

export class RequestModule {}