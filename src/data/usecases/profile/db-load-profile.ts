import { LoadProfileDetails } from '@/domain/usecases'
import { LoadProfileRepository, CountFollowerRepository, CountFollowingRepository, CountPostRepository } from '@/data/protocols/repository'

export class DbLoadProfile implements LoadProfileDetails {
    constructor (
        private readonly loadProfileRepository: LoadProfileRepository,
        private readonly countFollowerRepository: CountFollowerRepository,
        private readonly countFollowingRepository: CountFollowingRepository,
        private readonly countPostRepository: CountPostRepository
    ) {}

    async load (accountId: number): Promise<LoadProfileDetails.Result> {
        const countFollower = await this.countFollowerRepository.countFollower(accountId)
        const countFollowing = await this.countFollowingRepository.countFollowing(accountId)
        const countPost = await this.countPostRepository.count(accountId)
        const profile = await this.loadProfileRepository.loadById(accountId)
        return {
            userName: profile.userName,
            dateJoined: profile.dateJoined,
            followers: countFollower,
            following: countFollowing,
            numberPost: countPost
        }
    }
}