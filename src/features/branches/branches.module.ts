import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Branches } from "src/core/entities/branches.entity";
import { BranchesController } from "./branches.controller";
import { BranchesCreateHandler } from "./handler/branches.create.handler";
import { BranchesListHandler } from "./handler/branches.list.handler";

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([Branches])
    ],
    controllers: [
        BranchesController
    ],
    providers: [
        BranchesCreateHandler,
        BranchesListHandler
    ]
})

export class BranchesModule {}