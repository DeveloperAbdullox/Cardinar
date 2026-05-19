import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { SocialLinkListQuery } from "../query/socialLink.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { SocialLink } from "src/core/entities/socialLinks.entity";
import { Repository } from "typeorm";

@QueryHandler(SocialLinkListQuery)
export class SocialLinkListHandler implements IQueryHandler<SocialLinkListQuery> {
    constructor(
        @InjectRepository(SocialLink)
        private readonly socialLinkRepository: Repository<SocialLink>
    ) {}

    async execute(query: SocialLinkListQuery): Promise<any> {
        return await this.socialLinkRepository.find()
    }
}