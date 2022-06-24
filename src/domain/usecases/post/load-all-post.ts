import { PostModel } from '@/domain/models'

export interface LoadAllPost {
    load: (params: LoadAllPost.Request) => Promise<LoadAllPost.Result>
}

export namespace LoadAllPost {
    export type Result = PostModel[]
    export type Request = {
        page: number,
        limit: number
    }
}