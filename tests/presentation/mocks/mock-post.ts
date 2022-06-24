import { mockPostDefaultModel } from '@/tests/domain/mocks'
import { AddPost } from '@/domain/usecases'

export class AddPostSpy implements AddPost {
    request: AddPost.Request
    result = mockPostDefaultModel()

    async add (params: AddPost.Request): Promise<AddPost.Result> {
        this.request = {
            userId: params.userId,
            description: params.description,
            type: params.type,
            createdAt: params.createdAt
        }
        console.log(this.result)
        return this.result
    }
}