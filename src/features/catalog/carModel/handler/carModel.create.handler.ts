import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CarModelCreateCommand } from "../command/carModel.create.command";
import { Repository } from "typeorm";
import { CarModel } from "src/core/entities/carModels.entity";
import { InjectRepository } from "@nestjs/typeorm";

@CommandHandler(CarModelCreateCommand)
export class CarModelCreateHandler implements ICommandHandler<CarModelCreateCommand> {
    constructor(
        @InjectRepository(CarModel)
        private readonly carModelRespository: Repository<CarModel>
    ) {}

    async execute(command: CarModelCreateCommand): Promise<any> {
        const {carMakeId, title} = command.payload

        const carModel = this.carModelRespository.create({carMakeId, title})
        if (!carModel) {
            throw new Error('Failed to create CarModel')
        }

        return await this.carModelRespository.save(carModel)
    }
}