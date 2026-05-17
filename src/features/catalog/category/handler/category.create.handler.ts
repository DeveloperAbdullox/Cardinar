import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CategoryCreateCommand } from "../command/category.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/core/entities/categories.entity";
import { Repository } from "typeorm";

@CommandHandler(CategoryCreateCommand)
export class CategoryCreateHandler implements ICommandHandler<CategoryCreateCommand> {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    async execute(command: CategoryCreateCommand): Promise<any> {
        const {title} = command.payload

        const category = this.categoryRepository.create({title})
        if (!category) {
            throw new Error('Failed to create category')
        }

        return await this.categoryRepository.save(category)
    }
}