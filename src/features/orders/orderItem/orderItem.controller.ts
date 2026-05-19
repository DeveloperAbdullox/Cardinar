import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { OrderItemCreateDto } from "./dto/orderItem.create.dto";
import { OrderItemCreateCommand } from "./command/orderItem.create.command";
import { OrderItemListQuery } from "./query/orderItem.list.query";

@ApiTags('OrderItem')
@Controller('orderItem')
export class OrderItemController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: OrderItemCreateDto) {
        return await this.commandBus.execute(new OrderItemCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new OrderItemListQuery())
    }
}