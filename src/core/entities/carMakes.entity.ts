import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../base.model";
import { CarModel } from "./carModels.entity";
import { CustomProduct } from "./customProducts.entity";

@Entity('carMakes')
export class CarMake extends BaseModel {
    @Column({ length: 64, unique: true })
    title!: string

    @OneToMany(() => CarModel, (c) => c.carMake)
    carModels: CarModel[]

    @OneToMany(() => CustomProduct, (cp) => cp.carMake)
    customProduct: CustomProduct[]
}
