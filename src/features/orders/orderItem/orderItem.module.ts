import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItem } from "src/core/entities/orderItems.entity";
import { OrderItemController } from "./orderItem.controller";
import { OrderItemCreateHandler } from "./handler/orderItem.create.handler";
import { OrderItemListHandler } from "./handler/orderItem.list.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderItem]),
        CqrsModule
    ],
    controllers: [
        OrderItemController
    ],
    providers: [
        OrderItemCreateHandler,
        OrderItemListHandler
    ]
})

export class OrderItemModule {}