import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { ProductCreateDto } from "./dto/product.create.dto";
import { ProductCreateCommand } from "./commands/product.create.command";
import { ProductListQuery } from "./queries/product.list.query";
import { ProductListDto } from "./dto/product.list.dto";

@ApiTags('Product')
@Controller('product')
export class ProductController {
    constructor (
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ){}

    @Post()
    async create(@Body() payload: ProductCreateDto) {
        return await this.commandBus.execute(new ProductCreateCommand(payload))
    }

    @Get()
    async getAll(){
        return await this.queryBus.execute(new ProductListQuery())
    }
}