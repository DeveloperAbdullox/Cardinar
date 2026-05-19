import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { RequestListQuery } from "../query/request.list.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "src/core/entities/requests.entity";
import { Repository } from "typeorm";

@QueryHandler(RequestListQuery)
export class RequestListHandler implements IQueryHandler<RequestListQuery> {
    constructor(
        @InjectRepository(Request)
        private readonly requestRepository: Repository<Request>
    ) {}

    async execute(query: RequestListQuery): Promise<any> {
        return await this.requestRepository.find()
    }
}