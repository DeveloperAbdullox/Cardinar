import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CartItemListQuery } from "../query/cartItem.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { CartItem } from "src/core/entities/cartItem.entity";
import { Repository } from "typeorm";

@QueryHandler(CartItemListQuery)
export class CartItemListHandler implements IQueryHandler<CartItemListQuery> {
    constructor(
        @InjectRepository(CartItem)
        private readonly cartItemRepository: Repository<CartItem>
    ) {}

    async execute(query: CartItemListQuery): Promise<any> {
        return await this.cartItemRepository.find()
    }
}