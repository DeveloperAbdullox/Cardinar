import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ArticulListQuery } from "../query/articul.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Articul } from "src/core/entities/articuls.entity";
import { Repository } from "typeorm";

@QueryHandler(ArticulListQuery)
export class ArticulListHandler implements IQueryHandler<ArticulListQuery> {
    constructor(
        @InjectRepository(Articul)
        private readonly articulRepository: Repository<Articul>
    ) {}

    async execute(query: ArticulListQuery): Promise<any> {
        return await this.articulRepository.find()
    }
}