import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { OrderCreateCommand } from "../commands/order.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "src/core/entities/orders.entity";
import { Repository } from "typeorm";

@CommandHandler(OrderCreateCommand)
export class OrderCreateHandler implements ICommandHandler<OrderCreateCommand> {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>
    ) {}

    async execute(command: OrderCreateCommand): Promise<any> {
        const {
            userId,
            branchId, 
            fullName, 
            phoneNumber, 
            email, 
            delivery, 
            paymentMethod, 
            status
        } = command.payload

        const order = this.orderRepository.create({
            userId,
            branchId,
            fullName,
            phoneNumber,
            email,
            delivery,
            paymentMethod,
            status
        })

        if (!order) {
            throw new Error('Failed to create Order')
        }

        return await this.orderRepository.save(order)
    }
}