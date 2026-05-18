import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProductColorCreateCommand } from "../command/productColor.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductColor } from "src/core/entities/productColors.entity";
import { Repository } from "typeorm";

@CommandHandler(ProductColorCreateCommand)
export class ProductColorCreateHandler implements ICommandHandler<ProductColorCreateCommand> {
    constructor(
        @InjectRepository(ProductColor)
        private readonly productColorRepository: Repository<ProductColor>
    ) {}

    async execute(command: ProductColorCreateCommand): Promise<any> {
        const {productId, colorId} = command.payload

        const productColor = this.productColorRepository.create({productId, colorId})

        if (!productColor) {
            throw new Error("Failed to create ProductColor")
        }

        return await this.productColorRepository.save(productColor)
    }
}