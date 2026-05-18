import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { MaterialCreateCommand } from "../command/material.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Material } from "src/core/entities/materials.entity";
import { Repository } from "typeorm";

@CommandHandler(MaterialCreateCommand)
export class MaterialCreateHandler implements ICommandHandler<MaterialCreateCommand> {
    constructor(
        @InjectRepository(Material)
        private readonly materialRepository: Repository<Material>
    ) {}

    async execute(command: MaterialCreateCommand): Promise<any> {
        const {title, description} = command.payload

        const material = this.materialRepository.create({title, description})

        if(!material) {
            throw new Error('Failed to create Material')
        }

        return await this.materialRepository.save(material)
    }
}