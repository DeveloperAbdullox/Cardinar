import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProductCreateCommand } from "../commands/product.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/core/entities/product.entity";
import { Repository } from "typeorm";

@CommandHandler(ProductCreateCommand)
export class ProductCreateHandler implements ICommandHandler<ProductCreateCommand> {
    constructor (
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    async execute(command: ProductCreateCommand): Promise<any> {
        const {categoryId, title, price, description, status, isPremium} = command.payload

        const product = this.productRepository.create({
            categoryId,
            title,
            price,
            description,
            status,
            isPremium
        })

        if (!product) {
            throw new Error('Failed to create product')
        }

        await this.productRepository.save(product)
        return product
    }
}