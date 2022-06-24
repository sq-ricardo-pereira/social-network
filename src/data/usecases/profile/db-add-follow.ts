import { AddFollow } from '@/domain/usecases'
import { AddFollowRepository, CheckFollowRepository } from '@/data/protocols/repository'

export class DbAddFollow implements AddFollow {
    constructor (
        private readonly addFollowRepository: AddFollowRepository,
        private readonly checkFollowRepository: CheckFollowRepository
    ) {}
    
    async add (request: AddFollow.Request): Promise<boolean> {
        let checkFollow = await this.checkFollowRepository.check(request.followUserId)
        if (!checkFollow) {
            checkFollow = await this.addFollowRepository.add(request)
        }
        return checkFollow
    }
}