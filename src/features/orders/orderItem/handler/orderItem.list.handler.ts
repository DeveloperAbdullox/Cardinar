import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { OrderItemListQuery } from "../query/orderItem.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItem } from "src/core/entities/orderItems.entity";
import { Repository } from "typeorm";

@QueryHandler(OrderItemListQuery)
export class OrderItemListHandler implements IQueryHandler<OrderItemListQuery> {
    constructor(
        @InjectRepository(OrderItem)
        private readonly orderItemRepository: Repository<OrderItem>
    ) {}

    async execute(query: OrderItemListQuery): Promise<any> {
        return await this.orderItemRepository.find()
    }
}
