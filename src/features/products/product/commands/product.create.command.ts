import { ProductCreateDto } from "../dto/product.create.dto";

export class ProductCreateCommand {
    constructor(public readonly payload: ProductCreateDto){}
}