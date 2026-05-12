import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Max, MaxLength } from "class-validator";

export class RegisterDto {
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty()
    fullName!: string

    @IsString()
    @MaxLength(16)
    @IsNotEmpty()
    @ApiProperty({ uniqueItems: true })
    phoneNumber!: string

    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty({ uniqueItems: true })
    email!: string

    @IsString()
    @MaxLength(128)
    @IsNotEmpty()
    @ApiProperty()
    password!: string
}