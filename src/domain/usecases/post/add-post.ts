import { PostModel } from '@/domain/models'

export interface AddPost {
    add: (request: AddPost.Request) => Promise<AddPost.Result>
}

export namespace AddPost {
    export type Request = Omit<PostModel, 'id'>
    export type Result = PostModel
}