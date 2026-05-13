import { InjectRepository } from "@nestjs/typeorm";
import { RegisterCommand } from "../commands/register.command";
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from "src/core/entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async execute(command: RegisterCommand): Promise<any> {
        const {fullName, phoneNumber, email, password} = command.dto

        const hashedPassword = await argon2.hash(password)

        const newUser = this.userRepository.create({
            fullName,
            phoneNumber,
            email,
            password: hashedPassword
        })

        return await this.userRepository.save(newUser)
    }
}