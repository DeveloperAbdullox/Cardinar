import { CarModelCreateDto } from "../dto/carModel.create.dto";

export class CarModelCreateCommand {
    constructor(public readonly payload: CarModelCreateDto) {}
}