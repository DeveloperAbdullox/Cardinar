import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { BranchesQuery } from "../query/branches.get-all.query";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Branches } from "src/core/entities/branches.entity";

@QueryHandler(BranchesQuery)
export class BranchesListHandler implements IQueryHandler<BranchesQuery> {
    constructor (
        @InjectRepository(Branches)
        private readonly branchesRepository: Repository<Branches>
    ) {}

    async execute(query: BranchesQuery): Promise<any> {
        return await this.branchesRepository.find({
            where: {isActive: true}
        })
    }
}