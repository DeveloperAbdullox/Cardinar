import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CarMakeCreateCommand } from "../command/carMake.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { CarMake } from "src/core/entities/carMakes.entity";
import { Repository } from "typeorm";

@CommandHandler(CarMakeCreateCommand)
export class CarMakeCreateHandler implements ICommandHandler<CarMakeCreateCommand> {
    constructor(
        @InjectRepository(CarMake)
        private readonly carMakeRepository: Repository<CarMake>
    ) {}

    async execute(command: CarMakeCreateCommand): Promise<any> {
        const {title} = command.payload

        const carMake = this.carMakeRepository.create({title})
        if (!carMake) {
            throw new Error('Failed to create carMake')
        }

        return await this.carMakeRepository.save(carMake)
    }
}