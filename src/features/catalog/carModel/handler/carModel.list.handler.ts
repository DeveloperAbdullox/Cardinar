import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CarModelListQuery } from "../query/carModel.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { CarModel } from "src/core/entities/carModels.entity";
import { Repository } from "typeorm";

@QueryHandler(CarModelListQuery)
export class CarModelListHandler implements IQueryHandler<CarModelListQuery> {
    constructor(
        @InjectRepository(CarModel)
        private readonly carModelRepository: Repository<CarModel>
    ) {}

    async execute(query: CarModelListQuery): Promise<any> {
        return await this.carModelRepository.find()
    }
}