import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CategoryCreateDto {
    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @ApiProperty()
    title: string
}