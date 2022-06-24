import { AddUnfollow } from '@/domain/usecases'
import { AddUnfollowRepository } from '@/data/protocols/repository'

export class DbAddUnfollow implements AddUnfollow {
    constructor (private readonly addUnfollowRepository: AddUnfollowRepository) {}
    
    async unfollow (params: AddUnfollow.Request): Promise<void> {
        const data = {
            followId: params.followId,
            userId: params.accountId
        }
        return await this.addUnfollowRepository.unfollow(data)
    }
}