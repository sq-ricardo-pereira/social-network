import { LoadAllUser } from '@/domain/usecases'
import { LoadAllUserRepository } from '@/data/protocols/repository'

export class DbLoadAllUser implements LoadAllUser {
    constructor (private readonly loadAllUserRepository: LoadAllUserRepository) {}

    async load (params: LoadAllUser.Request): Promise<LoadAllUser.Result[]> {
        const users = await this.loadAllUserRepository.load(params)
        return users.map(user => {
            const userProfile = {
                id: user.id,
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                isFollowing: user.following?.length > 0 ? true : false,
                followId: user.following[0]?.id
            }
            return userProfile
        })
    }
}