import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { CartItemCreateDto } from "./dto/cartItem.create.dto";
import { CartItemCreateCommand } from "./command/cartItem.create.command";
import { CartItemListQuery } from "./query/cartItem.list.query";

@ApiTags('CartItem')
@Controller('carItem')
export class CartItemController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: CartItemCreateDto) {
        return await this.commandBus.execute(new CartItemCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new CartItemListQuery())
    }
}