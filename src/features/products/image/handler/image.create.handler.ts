import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ImageCreateCommand } from "../command/image.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Image } from "src/core/entities/images.entity";
import { Repository } from "typeorm";

@CommandHandler(ImageCreateCommand)
export class ImageCreateHandler implements ICommandHandler<ImageCreateCommand> {
    constructor(
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>
    ) {}

    async execute(command: ImageCreateCommand): Promise<any> {
        const {productId, image, position} = command.payload

        const Image = this.imageRepository.create({productId, image, position})

        if (!Image) {
            throw new Error('Failed to create Image')
        }

        return await this.imageRepository.save(Image)
    }
}