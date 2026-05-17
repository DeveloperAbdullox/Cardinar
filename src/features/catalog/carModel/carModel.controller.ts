import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { CarModelCreateDto } from "./dto/carModel.create.dto";
import { CarModelCreateCommand } from "./command/carModel.create.command";
import { CarModelListQuery } from "./query/carModel.list.query";

@ApiTags('CarModel')
@Controller('carModel')
export class CarModelController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: CarModelCreateDto) {
        return await this.commandBus.execute(new CarModelCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new CarModelListQuery())
    }
}