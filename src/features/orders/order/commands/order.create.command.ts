import { OrderCreateDto } from "../dto/order.create.dto";

export class OrderCreateCommand {
    constructor(public readonly payload: OrderCreateDto) {}
}