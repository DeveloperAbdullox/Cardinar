import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { CustomModelCreateDto } from "./dto/customModel.create.dto";
import { CustomModelCreateCommand } from "./command/customModel.create.command";
import { CustomModelListQuery } from "./query/customModel.list.query";

@ApiTags('CustomModel')
@Controller('customModel')
export class CustomModelController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: CustomModelCreateDto) {
        return await this.commandBus.execute(new CustomModelCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new CustomModelListQuery())
    }
}