import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { MaterialCreateDto } from "./dto/material.create.dto";
import { MaterialCreateCommand } from "./command/material.create.command";
import { MaterialListQuery } from "./query/material.list.query";

@ApiTags('Material')
@Controller('material')
export class MaterialController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: MaterialCreateDto) {
        return await this.commandBus.execute(new MaterialCreateCommand(payload))
    }

    @Get()
    async getAll () {
        return await this.queryBus.execute(new MaterialListQuery())
    }
}