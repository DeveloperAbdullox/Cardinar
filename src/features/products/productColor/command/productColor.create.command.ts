import { ProductColorCreateDto } from "../dto/productColor.create.dto";

export class ProductColorCreateCommand {
    constructor(public readonly payload: ProductColorCreateDto) {}
}