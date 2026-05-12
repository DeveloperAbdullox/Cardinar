import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
    @IsString()
    @MaxLength(64)
    @ApiProperty()
    @IsNotEmpty()
    fullName!: string

    @IsString()
    @MaxLength(16)
    @ApiProperty({ uniqueItems: true })
    @IsNotEmpty()
    phoneNumber!: string

    @IsString()
    @MaxLength(64)
    @ApiProperty({ uniqueItems: true })
    @IsNotEmpty()
    email!: string

    @IsString()
    @MaxLength(128)
    @ApiProperty()
    @IsNotEmpty()
    password!: string
}