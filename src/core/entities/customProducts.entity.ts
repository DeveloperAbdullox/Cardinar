import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "../base.model";
import { CarMake } from "./carMakes.entity";
import { CarModel } from "./carModels.entity";
import { Category } from "../enums/category.enum";
import { CustomModel } from "./customModels.entity";

@Entity('customProducts')
export class CustomProduct extends BaseModel {
    @Column({ length: 64 })
    fullName!: string

    @Column({ length: 16 })
    phoneNumber!: string

    @Column({ length: 64 })
    email?: string

    @Column()
    carMakeId!: number

    @ManyToOne(() => CarMake, (c) => c.customProduct)
    @JoinColumn({ name: 'carMakeId' })
    carMake: CarMake

    @Column()
    carModelId!: number

    @ManyToOne(() => CarModel, (c) => c.customProduct)
    @JoinColumn({ name: 'carModelId' })
    carModel: CarModel

    @Column({ type: 'enum', enum: Category })
    category!: Category

    @Column()
    modelId!: number

    @ManyToOne(() => CustomModel, (c) => c.customProduct)
    @JoinColumn({ name: 'modelId' })
    model: CustomModel

    @Column({ type: 'boolean' })
    withLogo!: boolean

    @Column({ length: 256 })
    image!: string

    @Column({ type: 'boolean', default: true })
    isActive!: boolean
}