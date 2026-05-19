import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class RequestCreateDto {
    @IsInt()
    @IsOptional()
    @ApiPropertyOptional()
    userId: number

    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty()
    fullName: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(16)
    @ApiProperty()
    phoneNumber: string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    @MaxLength(64)
    email: string

    @IsString()
    @MaxLength(2000)
    @IsOptional()
    @ApiPropertyOptional()
    comments: string
}