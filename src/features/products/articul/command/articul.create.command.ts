import { ArticulCreateDto } from "../dto/articul.create.dto";

export class ArticulCreateCommand {
    constructor(public readonly payload: ArticulCreateDto) {}
}