import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CustomProductCreateDto } from "./dto/customProduct.create.dto";
import { CustomProductCreateCommand } from "./command/customProduct.create.command";
import { CustomProductListQuery } from "./query/customProduct.list.query";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('CustomProduct')
@Controller('customProduct')
export class CustomProductController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: CustomProductCreateDto) {
        return await this.commandBus.execute(new CustomProductCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new CustomProductListQuery())
    }
}