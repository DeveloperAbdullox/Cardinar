import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartItem } from "src/core/entities/cartItem.entity";
import { CartItemController } from "./carItem.controller";
import { CartItemCreateHandler } from "./handler/cartItem.create.handler";
import { CartItemListHandler } from "./handler/cartItem.list.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([CartItem]),
        CqrsModule
    ],
    controllers: [
        CartItemController
    ],
    providers: [
        CartItemCreateHandler,
        CartItemListHandler
    ]
})

export class CartItemModule {}