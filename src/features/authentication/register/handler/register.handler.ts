import { InjectRepository } from "@nestjs/typeorm";
import { RegisterCommand } from "../commands/register.command";
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from "src/core/entities/user.entity";
import { Repository } from "typeorm";

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async execute(command: RegisterCommand): Promise<any> {
        const {}
    }


}