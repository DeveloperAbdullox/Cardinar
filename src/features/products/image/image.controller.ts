import { Body, Controller, Get, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ImageCreateDto } from "./dto/image.create.dto";
import { ImageCreateCommand } from "./command/image.create.command";
import { ApiTags } from "@nestjs/swagger";
import { ImageListQuery } from "./query/image.list.query";

@ApiTags('Image')
@Controller('image')
export class ImageController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async create(@Body() payload: ImageCreateDto) {
        return await this.commandBus.execute(new ImageCreateCommand(payload))
    }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new ImageListQuery())
    }
}