import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class ProductColorCreateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    productId: number
    
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    colorId: number
}