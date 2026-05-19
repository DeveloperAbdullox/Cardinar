import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { SocialLinkCreateDto } from "./dto/socialLink.create.dto";
import { SocialLinkCreateCommand } from "./command/socialLink.create.command";
import { SocialLinkListQuery } from "./query/socialLink.list.query";

@ApiTags('SocialLink')
@Controller('socialLink')
export class SocialLinkController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: SocialLinkCreateDto) {
        return await this.commandBus.execute(new SocialLinkCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new SocialLinkListQuery())
    }
}