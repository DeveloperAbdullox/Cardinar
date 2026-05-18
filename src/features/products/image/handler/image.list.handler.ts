import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ImageListQuery } from "../query/image.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Image } from "src/core/entities/images.entity";
import { Repository } from "typeorm";

@QueryHandler(ImageListQuery)
export class ImageListHandler implements IQueryHandler<ImageListQuery> {
    constructor(
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>
    ) {}

    async execute(query: ImageListQuery): Promise<any> {
        return await this.imageRepository.find()
    }
}