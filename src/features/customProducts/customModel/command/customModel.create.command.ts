import { CustomModelCreateDto } from "../dto/customModel.create.dto";

export class CustomModelCreateCommand {
    constructor(public readonly payload: CustomModelCreateDto) {}
}