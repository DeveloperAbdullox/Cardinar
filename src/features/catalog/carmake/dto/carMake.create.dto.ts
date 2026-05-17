import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CarMakeCreateDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MaxLength(64)
    title: string
}