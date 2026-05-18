import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ColorCreateCommand } from "../commnand/color.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Color } from "src/core/entities/colors.entity";
import { Repository } from "typeorm";

@CommandHandler(ColorCreateCommand)
export class ColorCreateHandler implements ICommandHandler<ColorCreateCommand> {
    constructor(
        @InjectRepository(Color)
        private readonly colorRepository: Repository<Color> 
    ) {}

    async execute(command: ColorCreateCommand): Promise<any> {
        const {title, color} = command.payload

        const Color = this.colorRepository.create({title, color})

        if (!Color) {
            throw new Error('Failed to create Color')
        }

        return await this.colorRepository.save(Color)
    }
}