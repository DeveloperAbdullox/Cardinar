import { RequestCreateDto } from "../dto/request.create.dto";

export class RequestCreateCommand {
    constructor(public readonly payload: RequestCreateDto) {}
}