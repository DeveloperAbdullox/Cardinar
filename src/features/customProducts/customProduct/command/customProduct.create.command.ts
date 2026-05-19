import { CustomProductCreateDto } from "../dto/customProduct.create.dto";

export class CustomProductCreateCommand {
    constructor(public readonly payload: CustomProductCreateDto) {}
}