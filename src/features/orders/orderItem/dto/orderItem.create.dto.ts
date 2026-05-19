import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class OrderItemCreateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    orderId: number

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    productId: number

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    articulId: number

    @IsNumber()
    @ApiProperty({ default: 1})
    @IsNotEmpty()
    quantity: number
}