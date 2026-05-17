import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { CarMakeCreateDto } from "./dto/carMake.create.dto";
import { CarMakeCreateCommand } from "./command/carMake.create.command";
import { CarMakeListQuery } from "./query/carMake.list.query";

@ApiTags('CarMake')
@Controller('carMake')
export class CarMakeController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: CarMakeCreateDto) {
        return await this.commandBus.execute(new CarMakeCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new CarMakeListQuery())
    }
}