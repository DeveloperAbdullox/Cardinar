import { StaticInfoCreateDto } from "../dto/staticInfo.create.dto";

export class StaticInfoCreateCommand {
    constructor(public readonly payload: StaticInfoCreateDto) {}
}