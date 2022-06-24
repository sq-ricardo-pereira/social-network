import { PostModel } from '@/domain/models'

export interface LoadPostByAccountId {
    loadByAccountId: (params: LoadPostByAccountId.Request) => Promise<LoadPostByAccountId.Result>
}

export namespace LoadPostByAccountId {
    export type Result = PostModel[]
    export type Request = {
        accountId: number,
        page: number,
        limit: number
    }
}