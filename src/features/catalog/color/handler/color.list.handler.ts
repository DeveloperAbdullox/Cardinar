import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ColorListQuery } from "../query/color,list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Color } from "src/core/entities/colors.entity";
import { Repository } from "typeorm";

@QueryHandler(ColorListQuery)
export class ColorListHandler implements IQueryHandler<ColorListQuery> {
    constructor(
        @InjectRepository(Color)
        private readonly colorRepository: Repository<Color>
    ) {}

    async execute(query: ColorListQuery): Promise<any> {
        return await this.colorRepository.find()
    }
}