import { CartItemCreateDto } from "../dto/cartItem.create.dto";

export class CartItemCreateCommand {
    constructor(public readonly payload: CartItemCreateDto) {}
}