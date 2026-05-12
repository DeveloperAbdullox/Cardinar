import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { CarMake } from "./carMakes.entity";
import { Articul } from "./articuls.entity";
import { CustomProduct } from "./customProducts.entity";

@Entity('carModels')
export class CarModel extends BaseModel {
    @Column()
    carMakeId!: number

    @ManyToOne(() => CarMake, (c) => c.carModels)
    @JoinColumn({ name: 'carMakeId' })
    carMake: CarMake

    @Column({ length: 64, unique: true })
    title!: string

    @OneToMany(() => Articul, (a) => a.carModel)
    articul: Articul[]

    @OneToMany(() => CustomProduct, (cp) => cp.carModel)
    customProduct: CustomProduct[]
}