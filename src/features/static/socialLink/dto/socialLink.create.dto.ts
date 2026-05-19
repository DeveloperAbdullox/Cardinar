import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class SocialLinkCreateDto {
    @IsString()
    @MaxLength(64)
    @IsNotEmpty()
    @ApiProperty()
    title: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(256)
    link: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(128)
    icon: string
}