import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { serverError, ok, badRequest, forbidden } from '@/presentation/helpers'
import { AddPost } from '@/domain/usecases'
import { PostType } from '@/data/enums'
import { LimitPostError } from '@/presentation/errors'

export class AddPostController implements Controller {
    constructor (
        private readonly addPost: AddPost,
        private readonly validation: Validation
    ) {}

    async handle (request: AddPostController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) {
                return badRequest(error)
            }

            const date = new Date()
            const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` as any
            const postRequest = {
                ...request,
                userId: request.accountId,
                createdAt: today,
                type: request.type ? request.type : PostType.DEFAULT
            }
            const result = await this.addPost.add(postRequest)
            if (typeof result === 'boolean') {
                return forbidden(new LimitPostError())
            }
            return ok(result)
        } catch (error) {
            console.log(error)
            return serverError(error)
        }
    }
}

export namespace AddPostController {
    export type Request = {
        accountId: number,
        description: string,
        originalPost?: number,
        type: PostType
    }
}