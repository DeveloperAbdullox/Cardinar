import { MaterialCreateDto } from "../dto/material.create.dto";

export class MaterialCreateCommand {
    constructor(public readonly payload: MaterialCreateDto) {}
}