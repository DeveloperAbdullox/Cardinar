import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { StaticInfoCreateDto } from "./dto/staticInfo.create.dto";
import { StaticInfoCreateCommand } from "./command/staticInfo.create.command";
import { StaticInfoListQuery } from "./query/staticInfo.list.query";

@ApiTags('StaticInfo')
@Controller('staticInfo')
export class StaticInfoController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: StaticInfoCreateDto) {
        return await this.commandBus.execute(new StaticInfoCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new StaticInfoListQuery())
    }
}