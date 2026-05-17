import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { CategoryCreateDto } from "./dto/category.create.dto";
import { CategoryCreateCommand } from "./command/category.create.command";
import { CategoryListQuery } from "./query/category.list.query";

@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: CategoryCreateDto) {
        return await this.commandBus.execute(new CategoryCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new CategoryListQuery())
    }
}