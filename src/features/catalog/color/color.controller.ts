import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { ColorCreateDto } from "./dto/color.create.dto";
import { ColorCreateCommand } from "./commnand/color.create.command";
import { ColorListQuery } from "./query/color,list.query";

@ApiTags('Color')
@Controller('color')
export class ColorController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: ColorCreateDto) {
        return await this.commandBus.execute(new ColorCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new ColorListQuery())
    }
}