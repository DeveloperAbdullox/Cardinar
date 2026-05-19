import { OrderItemCreateDto } from "../dto/orderItem.create.dto";

export class OrderItemCreateCommand {
    constructor(public readonly payload: OrderItemCreateDto) {}
}