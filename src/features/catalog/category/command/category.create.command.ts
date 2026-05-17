import { CategoryCreateDto } from "../dto/category.create.dto";

export class CategoryCreateCommand {
    constructor(public readonly payload: CategoryCreateDto) {}
}