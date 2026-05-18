import { ColorCreateDto } from "../dto/color.create.dto";

export class ColorCreateCommand {
    constructor(public readonly payload: ColorCreateDto) {}
}