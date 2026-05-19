import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { SocialLinkCreateCommand } from "../command/socialLink.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { SocialLink } from "src/core/entities/socialLinks.entity";
import { Repository } from "typeorm";

@CommandHandler(SocialLinkCreateCommand)
export class SocialLinkCreateHandler implements ICommandHandler<SocialLinkCreateCommand> {
    constructor(
        @InjectRepository(SocialLink)
        private readonly socialLinkRepository: Repository<SocialLink>
    ) {}

    async execute(command: SocialLinkCreateCommand): Promise<any> {
        const {title, link, icon} = command.payload

        const socialLink = this.socialLinkRepository.create({title, link, icon})

        if (!socialLink) {
            throw new Error('Failed to create SocialLink')
        }

        return await this.socialLinkRepository.save(socialLink)
    }
}