import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class MaterialCreateDto {
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    @IsNotEmpty()
    title: string

    @IsString()
    @MaxLength(512)
    @ApiProperty()
    @IsOptional()
    description: string
}