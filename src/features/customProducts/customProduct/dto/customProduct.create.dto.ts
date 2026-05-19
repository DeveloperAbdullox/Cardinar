import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { Category } from "src/core/enums/category.enum";

export class CustomProductCreateDto {
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty()
    fullName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(16)
    phoneNumber: string

    @ApiPropertyOptional()
    @IsOptional()
    @MaxLength(64)
    @IsString()
    email: string

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    carMakeId: number

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    carModelId: number

    @IsEnum(Category)
    @ApiProperty({ enum: Category })
    @IsNotEmpty()
    category: Category

    @IsInt()
    @ApiProperty()
    @IsNotEmpty()
    modelId: number

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ type: 'boolean' })
    withLogo: boolean

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @MaxLength(256)
    image: string

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ type: 'boolean', default: true })
    isActive: boolean
}