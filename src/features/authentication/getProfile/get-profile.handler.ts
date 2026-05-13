import { GetProfileQuery } from "./get-profile.query";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/core/entities/user.entity";
import { Repository } from "typeorm";

@QueryHandler(GetProfileQuery)
export class GetProfileHandler implements IQueryHandler<GetProfileQuery> {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async execute(query: GetProfileQuery): Promise<any> {
        const user = await this.userRepository.findOne({
            where: { id: query.userId}
        })

        if (!user) throw new Error('User not found')
        
        const { password: _, ...userProfile } = user

        return userProfile
    }
}