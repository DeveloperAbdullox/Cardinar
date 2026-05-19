import { SocialLinkCreateDto } from "../dto/socialLink.create.dto";

export class SocialLinkCreateCommand {
    constructor(public readonly payload: SocialLinkCreateDto) {}
}