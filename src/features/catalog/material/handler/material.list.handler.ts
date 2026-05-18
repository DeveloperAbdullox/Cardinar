import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Material } from "src/core/entities/materials.entity";
import { Repository } from "typeorm";
import { MaterialListQuery } from "../query/material.list.query";

@QueryHandler(MaterialListQuery)
export class MaterialListHandler implements IQueryHandler<MaterialListQuery> {
    constructor(
        @InjectRepository(Material)
        private readonly materialRepository: Repository<Material>
    ) {}

    async execute(query: MaterialListQuery): Promise<any> {
        return await this.materialRepository.find()
    }
}