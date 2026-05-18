import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class ArticulCreateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    productId: number

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    carModelId: number
}