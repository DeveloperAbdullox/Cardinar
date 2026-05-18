import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class ImageCreateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    productId: number

    @IsString()
    @MaxLength(256)
    @IsNotEmpty()
    @ApiProperty()
    image: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    position: number
}