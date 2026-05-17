import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";
import { BranchType } from "src/core/enums/branch-type.enum";

export class BranchesCreateDto {
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty()
    title!: string;

    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @ApiProperty()
    address!: string;

    @IsString()
    @MaxLength(64)
    @ApiProperty()
    district?: string;

    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty()
    region!: string;

    @IsString()
    @MaxLength(16)
    @IsNotEmpty()
    @ApiProperty()
    phoneNumber!: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    @Min(-180)
    @Max(180)
    longitude!: number;

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    @Min(-90)
    @Max(90)
    latitude!: number;

    @IsNotEmpty()
    @ApiProperty()
    @IsBoolean()
    isActive!: boolean;

    @IsNotEmpty()
    @ApiProperty({ enum: BranchType })
    @IsEnum(BranchType)
    branchType!: BranchType;
}