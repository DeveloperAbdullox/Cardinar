import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CustomProductListQuery } from "../query/customProduct.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomProduct } from "src/core/entities/customProducts.entity";
import { Repository } from "typeorm";

@QueryHandler(CustomProductListQuery)
export class CustomProductListHandler implements IQueryHandler<CustomProductListQuery> {
    constructor(
        @InjectRepository(CustomProduct)
        private readonly customProductRepository: Repository<CustomProduct>
    ) {}

    async execute(query: CustomProductListQuery): Promise<any> {
        return await this.customProductRepository.find()
    }
}