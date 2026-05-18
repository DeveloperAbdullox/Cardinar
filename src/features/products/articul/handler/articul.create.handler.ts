import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ArticulCreateCommand } from "../command/articul.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Articul } from "src/core/entities/articuls.entity";
import { Repository } from "typeorm";

@CommandHandler(ArticulCreateCommand)
export class ArticulCreateHandler implements ICommandHandler<ArticulCreateCommand> {
    constructor(
        @InjectRepository(Articul)
        private readonly articulRepository: Repository<Articul>
    ) {}

    async execute(command: ArticulCreateCommand): Promise<any> {
        const {productId, carModelId} = command.payload

        const articul = this.articulRepository.create({productId, carModelId})

        if (!articul) {
            throw new Error("Failed to create Articul")
        }

        return await this.articulRepository.save(articul)
    }
}