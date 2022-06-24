import { AddFollow } from '@/domain/usecases'

export interface AddFollowRepository {
    add: (request: AddFollowRepository.Request) => Promise<boolean>
}

export namespace AddFollowRepository {
    export type Request = AddFollow.Request
}