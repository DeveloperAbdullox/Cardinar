import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BranchesListDto {
    @Expose()
    @ApiProperty()
    title!: string;

    @Expose()
    @ApiProperty()
    address!: string;

    @Expose()
    @ApiProperty()
    district?: string;

    @Expose()
    @ApiProperty()
    region!: string;

    @Expose()
    @ApiProperty()
    phoneNumber!: string;

    @Expose()
    @ApiProperty()
    longitude!: number;

    @Expose()
    @ApiProperty()
    latitude!: number;

    @Expose()
    @ApiProperty()
    isActive!: boolean;

    @Expose()
    @ApiProperty()
    branchType!: string;
}