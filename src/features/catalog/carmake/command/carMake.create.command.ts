import { CarMakeCreateDto } from "../dto/carMake.create.dto";

export class CarMakeCreateCommand {
    constructor(public readonly payload: CarMakeCreateDto) {}
}