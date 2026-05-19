import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SocialLink } from "src/core/entities/socialLinks.entity";
import { SocialLinkController } from "./socialLink.controller";
import { SocialLinkListHandler } from "./handler/socialLink.list.handler";
import { SocialLinkCreateHandler } from "./handler/socialLink.create.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([SocialLink]),
        CqrsModule
    ],
    controllers: [
        SocialLinkController
    ],
    providers: [
        SocialLinkListHandler,
        SocialLinkCreateHandler
    ]
})

export class SocialLinkModule {}