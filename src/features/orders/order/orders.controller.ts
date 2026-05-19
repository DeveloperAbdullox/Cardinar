import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { OrderCreateDto } from "./dto/order.create.dto";
import { OrderCreateCommand } from "./commands/order.create.command";
import { OrderListQuery } from "./queries/order.list.query";

@ApiTags('Order')
@Controller('order')
export class OrderController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: OrderCreateDto) {
        return await this.commandBus.execute(new OrderCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new OrderListQuery())
    }
}