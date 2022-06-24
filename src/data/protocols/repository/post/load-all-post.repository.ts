import { PostModel } from '@/domain/models'

export interface LoadAllPostRepository {
    load: (params: LoadAllPostRepository.Request) => Promise<LoadAllPostRepository.Result>
}

export namespace LoadAllPostRepository {
    export type Result = PostModel[]
    export type Request = {
        accountId?: number,
        isFollowing?: boolean,
        limit: number,
        page: number
    }
}