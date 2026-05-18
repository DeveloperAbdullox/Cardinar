import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class ProductListDto {
    @Expose()
    @ApiPropertyOptional()
    categoryId: number

    @Expose()
    @ApiPropertyOptional()
    title: string

    @Expose()
    @ApiPropertyOptional()
    price: number

    @Expose()
    @ApiPropertyOptional()
    description: string

    @Expose()
    @ApiPropertyOptional()
    status: string

    @Expose()
    @ApiPropertyOptional()
    isPremium: string
}