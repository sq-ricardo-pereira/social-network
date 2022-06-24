import { AddPost } from '@/domain/usecases'

export interface AddPostRepository {
    add: (request: AddPostRepository.Request) => Promise<AddPostRepository.Result>
}

export namespace AddPostRepository {
    export type Request = AddPost.Request
    export type Result = AddPost.Result
}