import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CarMakeListQuery } from "../query/carMake.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { CarMake } from "src/core/entities/carMakes.entity";
import { Repository } from "typeorm";

@QueryHandler(CarMakeListQuery)
export class CarMakeListHandler implements IQueryHandler<CarMakeListQuery> {
    constructor(
        @InjectRepository(CarMake)
        private readonly carMakeRepository: Repository<CarMake>
    ) {}

    async execute(query: CarMakeListQuery): Promise<any> {
        return await this.carMakeRepository.find()
    }
}