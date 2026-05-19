import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CustomModelCreateCommand } from "../command/customModel.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomModel } from "src/core/entities/customModels.entity";
import { Repository } from "typeorm";

@CommandHandler(CustomModelCreateCommand)
export class CustomModelCreateHandler implements ICommandHandler<CustomModelCreateCommand> {
    constructor(
        @InjectRepository(CustomModel)
        private readonly customModelRepository: Repository<CustomModel>
    ) {}

    async execute(command: CustomModelCreateCommand): Promise<any> {
        const {category, title, image} = command.payload

        const customModel = this.customModelRepository.create({category, title, image})
        if (!customModel) {
            throw new Error('Failed to create CustomModel')
        }

        return await this.customModelRepository.save(customModel)
    }
}