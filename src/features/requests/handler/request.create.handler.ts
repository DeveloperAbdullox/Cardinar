import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RequestCreateCommand } from "../command/request.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "src/core/entities/requests.entity";
import { Repository } from "typeorm";

@CommandHandler(RequestCreateCommand)
export class RequestCreateHanler implements ICommandHandler<RequestCreateCommand> {
    constructor(
        @InjectRepository(Request)
        private readonly requestRepository: Repository<Request>
    ) {}

    async execute(command: RequestCreateCommand): Promise<any> {
        const {userId, fullName, phoneNumber, email, comments} = command.payload

        const request = this.requestRepository.create({userId, fullName, phoneNumber, email, comments})

        if (!request) {
            throw new Error('Failed to create Request')
        }

        return await this.requestRepository.save(request)
    }
}