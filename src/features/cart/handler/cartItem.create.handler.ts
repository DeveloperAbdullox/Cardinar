import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CartItemCreateCommand } from "../command/cartItem.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { CartItem } from "src/core/entities/cartItem.entity";
import { Repository } from "typeorm";

@CommandHandler(CartItemCreateCommand)
export class CartItemCreateHandler implements ICommandHandler<CartItemCreateCommand> {
    constructor(
        @InjectRepository(CartItem)
        private readonly cartItemRepository: Repository<CartItem>
    ) {}

    async execute(command: CartItemCreateCommand): Promise<any> {
        const {productId, articulId, quantity} = command.payload

        const cartItem = this.cartItemRepository.create({
            productId, articulId, quantity
        })

        if (!cartItem) {
            throw new Error('Failed to create CartItem')
        }

        return await this.cartItemRepository.save(cartItem)
    }
}