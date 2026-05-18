import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class ColorCreateDto {
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty()
    title: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    @ApiProperty()
    color: string
}