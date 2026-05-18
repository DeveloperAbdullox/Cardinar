import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ProductListQuery } from "../queries/product.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/core/entities/product.entity";
import { Repository } from "typeorm";

@QueryHandler(ProductListQuery)
export class ProductListHandler implements IQueryHandler<ProductListQuery> {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ){}

    async execute(query: ProductListQuery): Promise<any> {
        return await this.productRepository.find()
    }
}