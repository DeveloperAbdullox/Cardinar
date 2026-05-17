import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { BranchesCreateDto } from "./dto/branches.create.dto";
import { BranchesCreateCommand } from "./command/branches.create.command";
import { BranchesQuery } from "./query/branches.get-all.query";

@ApiTags('Branches')
@Controller('branches')
export class BranchesController {
    constructor (
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: BranchesCreateDto) {
        return await this.commandBus.execute(new BranchesCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new BranchesQuery())
    }
}