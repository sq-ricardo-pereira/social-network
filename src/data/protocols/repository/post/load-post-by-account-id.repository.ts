import { PostModel } from '@/domain/models'

export interface LoadPostByAccountIdRepository {
    loadByAccountId: (params: LoadPostByAccountIdRepository.Request) => Promise<LoadPostByAccountIdRepository.Result>
}

export namespace LoadPostByAccountIdRepository {
    export type Result = PostModel[]
    export type Request = {
        accountId: number,
        limit: number,
        page: number
    }
}