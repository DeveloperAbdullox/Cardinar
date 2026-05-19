import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { StaticInfoCreateCommand } from "../command/staticInfo.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { StaticInfo } from "src/core/entities/staticInfo.entity";
import { Repository } from "typeorm";

@CommandHandler(StaticInfoCreateCommand)
export class StaticInfoCreateHandler implements ICommandHandler<StaticInfoCreateCommand> {
    constructor(
        @InjectRepository(StaticInfo)
        private readonly staticInfoRepository: Repository<StaticInfo>
    ) {}

    async execute(command: StaticInfoCreateCommand): Promise<any> {
        const {addres, phoneNumber, workingHours, email} = command.payload

        const staticInfo = this.staticInfoRepository.create({addres, phoneNumber, workingHours, email})

        if (!staticInfo) {
            throw new Error('Failed to create StaticInfo')
        }

        return await this.staticInfoRepository.save(staticInfo)
    }
}