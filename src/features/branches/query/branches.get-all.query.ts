import { BranchesListDto } from "../dto/branches.list.dto";

export class BranchesQuery {
    constructor(public readonly payload?: BranchesListDto) {}
}