import { Body, Controller, Get, ParseIntPipe, Post, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { RegisterDto } from "./register/dto/register.dto";
import { RegisterCommand } from "./register/commands/register.command";
import { LoginDto } from "./login/dto/login.dto";
import { LoginCommand } from "./login/commands/login.command";
import { GetProfileQuery } from "./getProfile/get-profile.query";

@ApiTags('Authentication')
@Controller('auth')
export class AuthenticationController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return await this.commandBus.execute(new RegisterCommand(dto))
    }

    @Post('login')
    async login(@Body() dto: LoginDto) {
        return await this.commandBus.execute(new LoginCommand(dto))
    }

    @Get('profile/:id')
    async getProfile(@Query('id', ParseIntPipe) id: number) {
        return await this.queryBus.execute(new GetProfileQuery(id))
    }
}