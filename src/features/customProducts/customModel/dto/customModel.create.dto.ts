import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Category } from "src/core/enums/category.enum";

export class CustomModelCreateDto {
    @IsEnum(Category)
    @IsNotEmpty()
    @ApiProperty({ enum: Category })
    category: Category

    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @ApiProperty()
    title: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(256)
    @IsString()
    image: string
}