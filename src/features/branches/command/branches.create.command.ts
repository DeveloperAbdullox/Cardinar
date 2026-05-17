import { BranchesCreateDto } from "../dto/branches.create.dto";

export class BranchesCreateCommand {
    constructor(public readonly payload: BranchesCreateDto){}
}