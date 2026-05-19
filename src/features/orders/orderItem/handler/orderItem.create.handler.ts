import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { OrderItemCreateCommand } from "../command/orderItem.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItem } from "src/core/entities/orderItems.entity";
import { Repository } from "typeorm";

@CommandHandler(OrderItemCreateCommand)
export class OrderItemCreateHandler implements ICommandHandler<OrderItemCreateCommand> {
    constructor(
        @InjectRepository(OrderItem)
        private readonly orderItemRepository: Repository<OrderItem>
    ) {}

    async execute(command: OrderItemCreateCommand): Promise<any> {
        const {orderId, productId, articulId, quantity} = command.payload

        const orderItem = this.orderItemRepository.create({orderId, productId, articulId, quantity})

        if (!orderItem) {
            throw new Error('Failed to create OrderItem')
        }

        return await this.orderItemRepository.save(orderItem)
    }
}