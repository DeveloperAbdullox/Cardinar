import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CarModelCreateDto {
    @IsInt()
    @ApiProperty()
    @IsNotEmpty()
    carMakeId: number

    @IsString()
    @ApiProperty()
    @MaxLength(64)
    @IsNotEmpty()
    title: string
}