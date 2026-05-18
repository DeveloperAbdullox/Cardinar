import { ImageCreateDto } from "../dto/image.create.dto";

export class ImageCreateCommand {
    constructor(public readonly payload: ImageCreateDto) {}
}