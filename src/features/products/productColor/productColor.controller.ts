import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { ProductColorCreateDto } from "./dto/productColor.create.dto";
import { ProductColorCreateCommand } from "./command/productColor.create.command";
import { ProductColorListQuery } from "./query/productColor.list.query";

@ApiTags('ProductColor')
@Controller('productColor')
export class ProductColorController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: ProductColorCreateDto) {
        return await this.commandBus.execute(new ProductColorCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new ProductColorListQuery())
    }
}