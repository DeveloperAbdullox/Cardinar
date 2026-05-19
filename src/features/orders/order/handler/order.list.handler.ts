import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { OrderListQuery } from "../queries/order.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "src/core/entities/orders.entity";
import { Repository } from "typeorm";

@QueryHandler(OrderListQuery)
export class OrderListHandler implements IQueryHandler<OrderListQuery> {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository : Repository<Order>
    ) {}

    async execute(query: OrderListQuery): Promise<any> {
        return await this.orderRepository.find()
    }
}