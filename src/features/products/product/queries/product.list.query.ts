import { ProductListDto } from "../dto/product.list.dto";

export class ProductListQuery {
    constructor(public readonly payload?: ProductListDto){}
}