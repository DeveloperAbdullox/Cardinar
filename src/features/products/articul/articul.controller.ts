import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ArticulCreateDto } from "./dto/articul.create.dto";
import { ArticulCreateCommand } from "./command/articul.create.command";
import { ArticulListQuery } from "./query/articul.list.query";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('Articul')
@Controller('articul')
export class ArticulController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: ArticulCreateDto) {
        return await this.commandBus.execute(new ArticulCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new ArticulListQuery())
    }
}