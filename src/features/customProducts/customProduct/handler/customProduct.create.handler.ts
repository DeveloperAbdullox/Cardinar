import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CustomProductCreateCommand } from "../command/customProduct.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomProduct } from "src/core/entities/customProducts.entity";
import { Repository } from "typeorm";

@CommandHandler(CustomProductCreateCommand)
export class CustomProductCreateHandler implements ICommandHandler<CustomProductCreateCommand> {
    constructor(
        @InjectRepository(CustomProduct)
        private readonly customProductRepository: Repository<CustomProduct>
    ) {}

    async execute(command: CustomProductCreateCommand): Promise<any> {
        const {
            fullName, 
            phoneNumber, 
            email, 
            carMakeId, 
            carModelId, 
            category, 
            modelId, 
            withLogo, 
            image, 
            isActive
        } = command.payload

        const customProduct = this.customProductRepository.create({
            fullName,
            phoneNumber,
            email,
            carMakeId,
            carModelId,
            category,
            modelId,
            withLogo,
            image,
            isActive
        })

        if (!customProduct) {
            throw new Error('Failed to create CustomProduct')
        }

        return await this.customProductRepository.save(customProduct)
    }
}