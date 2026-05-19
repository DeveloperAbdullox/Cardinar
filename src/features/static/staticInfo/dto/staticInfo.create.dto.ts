import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class StaticInfoCreateDto {
    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @ApiProperty()
    addres: string

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    @MaxLength(16)
    phoneNumber: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(128)
    workingHours: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(64)
    email: string
}