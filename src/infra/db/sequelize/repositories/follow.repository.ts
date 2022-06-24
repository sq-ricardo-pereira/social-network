import { 
    AddFollowRepository, 
    CountFollowerRepository, 
    CountFollowingRepository,
    AddUnfollowRepository,
    CheckFollowRepository
} from '@/data/protocols/repository';
import { Follow } from '@/infra/db/sequelize/models'

export class FollowSqlServerRepository implements AddFollowRepository, CountFollowerRepository, CountFollowingRepository, AddUnfollowRepository, CheckFollowRepository {

    async add (params: AddFollowRepository.Request): Promise<boolean> {
        return await Follow.create(params) as any
    }

    async countFollower (accountId: number): Promise<number> {
        return Follow.count({
            where: {
                followUserId: accountId
            }
        }) as any
    }

    async countFollowing (accountId: number): Promise<number> {
        return Follow.count({
            where: {
                userId: accountId
            }
        }) as any
    }

    async unfollow (data: AddUnfollowRepository.Request): Promise<void> {
        Follow.destroy({
            where: {
                userId: data.userId,
                id: data.followId
            }
        })
    }

    async check (followerId: number): Promise<boolean> {
        const follow = await Follow.findOne({where: {followUserId: followerId}})
        if (follow === null) return false
        return true
    }
}