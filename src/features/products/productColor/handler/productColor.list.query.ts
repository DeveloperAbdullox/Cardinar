import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductColor } from "src/core/entities/productColors.entity";
import { Repository } from "typeorm";
import { ProductColorListQuery } from "../query/productColor.list.query";

@QueryHandler(ProductColorListQuery)
export class ProductColorListHandler implements IQueryHandler<ProductColorListQuery> {
    constructor(
        @InjectRepository(ProductColor)
        private readonly productColorRepository: Repository<ProductColor>
    ) {}

    async execute(query: ProductColorListQuery): Promise<any> {
        return await this.productColorRepository.find()
    }
}