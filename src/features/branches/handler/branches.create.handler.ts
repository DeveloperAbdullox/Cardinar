import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { BranchesCreateCommand } from "../command/branches.create.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Branches } from "src/core/entities/branches.entity";
import { Repository } from "typeorm";

@CommandHandler(BranchesCreateCommand)
export class BranchesCreateHandler implements ICommandHandler<BranchesCreateCommand> {
    constructor(
        @InjectRepository(Branches)
        private readonly branchesRepository: Repository<Branches>
    ) {}

    async execute(command: BranchesCreateCommand): Promise<any> {
        const {title, address, district, region, phoneNumber, longitude, latitude, isActive, branchType} = command.payload;

        const branch = this.branchesRepository.create({
            title,
            address,
            district,
            region,
            phoneNumber,
            longitude,
            latitude,
            isActive,
            branchType
        })

        if (!branch) {
            throw new Error('Failed to create branch');
        }

        await this.branchesRepository.save(branch);
        return branch;
    }
}