import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CustomModelListQuery } from "../query/customModel.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomModel } from "src/core/entities/customModels.entity";
import { Repository } from "typeorm";

@QueryHandler(CustomModelListQuery)
export class CustomModelListHandler implements IQueryHandler<CustomModelListQuery> {
    constructor(
        @InjectRepository(CustomModel)
        private readonly customModelRepository: Repository<CustomModel>
    ) {}

    async execute(query: CustomModelListQuery): Promise<any> {
        return await this.customModelRepository.find()
    }
}