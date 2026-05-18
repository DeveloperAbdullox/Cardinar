import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Image } from "src/core/entities/images.entity";
import { ImageController } from "./image.controller";
import { ImageCreateHandler } from "./handler/image.create.handler";
import { ImageListHandler } from "./handler/image.list.handler";

@Module({
    imports : [
        TypeOrmModule.forFeature([Image]),
        CqrsModule
    ],
    controllers: [
        ImageController
    ],
    providers: [
        ImageCreateHandler,
        ImageListHandler
    ]
})

export class ImageModule {}