import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CartItemCreateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    productId: number
    
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    articulId: number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ default: 1 })
    quantity: number
}