import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { RequestCreateDto } from "./dto/request.create.dto";
import { RequestCreateCommand } from "./command/request.create.command";
import { RequestListQuery } from "./query/request.list.query";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Request')
@Controller('request')
export class RequestController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: RequestCreateDto) {
        return await this.commandBus.execute(new RequestCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new RequestListQuery())
    }
}