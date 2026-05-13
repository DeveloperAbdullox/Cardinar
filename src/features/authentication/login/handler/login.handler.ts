import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { LoginCommand } from "../commands/login.command";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/core/entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";
import { UnauthorizedException } from "@nestjs/common";

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async execute(command: LoginCommand): Promise<any> {
        const {fullName, phoneNumber, email, password } = command.dto

        const user = await this.userRepository.findOne({
            where: [
                { phoneNumber },
                { email }
            ]
        })

        if (!user) {
            throw new Error('The phone number or email address is incorrect')
        }

        const isPasswordValid = await argon2.verify(user.password, password)
        if (!isPasswordValid) {
            throw new UnauthorizedException('The email address or password is incorrect')
        }

        return {
            id: user.id,
            fullName: user.fullName,
            phoneNumber: user.phoneNumber,
            email: user.email
        }
    }
}