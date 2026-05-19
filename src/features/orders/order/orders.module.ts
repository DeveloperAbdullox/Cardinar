import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "src/core/entities/orders.entity";
import { OrderController } from "./orders.controller";
import { OrderCreateHandler } from "./handler/order.create.handler";
import { OrderListHandler } from "./handler/order.list.handler";

@Module({
    imports: [
        TypeOrmModule.forFeature([Order]),
        CqrsModule
    ],
    controllers: [
        OrderController
    ],
    providers: [
        OrderCreateHandler,
        OrderListHandler
    ]
})

export class OrderModule {}