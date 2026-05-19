import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { StaticInfoListQuery } from "../query/staticInfo.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { StaticInfo } from "src/core/entities/staticInfo.entity";
import { Repository } from "typeorm";

@QueryHandler(StaticInfoListQuery)
export class StaticInfoListHandler implements IQueryHandler<StaticInfoListQuery> {
    constructor(
        @InjectRepository(StaticInfo)
        private readonly staticInfoRepository: Repository<StaticInfo>
    ) {}

    async execute(query: StaticInfoListQuery): Promise<any> {
        return await this.staticInfoRepository.find()
    }
}