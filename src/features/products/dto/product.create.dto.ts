import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Status } from "src/core/enums/status.enum";

export class ProductCreateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    categoryId: number

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    title: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number

    @IsString()
    @IsOptional()
    @ApiProperty()
    description: string

    @IsEnum(Status)
    @IsOptional()
    @ApiProperty({ enum: Status })
    status: Status

    @IsBoolean()
    @IsOptional()
    @ApiProperty()
    isPremium: boolean
}