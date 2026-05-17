import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { CategoryListQuery } from "../query/category.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/core/entities/categories.entity";
import { Repository } from "typeorm";

@QueryHandler(CategoryListQuery)
export class CategoryListHandler implements IQueryHandler<CategoryListQuery> {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    async execute(query: CategoryListQuery): Promise<any> {
        return await this.categoryRepository.find()
    }
}