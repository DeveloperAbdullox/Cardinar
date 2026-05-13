import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/core/entities/user.entity";
import { LoginHandler } from "./login/handler/login.handler";
import { RegisterHandler } from "./register/handler/register.handler";
import { AuthenticationController } from "./auth.controller";
import { CqrsModule } from "@nestjs/cqrs";
import { GetProfileHandler } from "./getProfile/get-profile.handler";

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [
        AuthenticationController
    ],
    providers: [
        LoginHandler,
        RegisterHandler,
        GetProfileHandler
    ]
})

export class AuthenticationModule {}