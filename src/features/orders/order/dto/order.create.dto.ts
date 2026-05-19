import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { OrderStatus } from "src/core/enums/order-status.enum";
import { PaymentMethod } from "src/core/enums/payment-method.enum";

export class OrderCreateDto {
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    userId: number

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    branchId: number

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
    @MaxLength(64)
    @ApiPropertyOptional()
    email: string

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ type: 'boolean' })
    delivery: boolean

    @IsEnum(PaymentMethod)
    @ApiProperty({ enum: PaymentMethod })
    paymentMethod: PaymentMethod

    @IsEnum(OrderStatus)
    @ApiProperty({ enum: OrderStatus })
    status: OrderStatus
}