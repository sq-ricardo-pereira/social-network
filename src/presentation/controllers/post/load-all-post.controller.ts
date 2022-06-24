import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { LoadAllPost } from '@/domain/usecases'

export class LoadAllPostController implements Controller {
    constructor (private readonly loadPost: LoadAllPost) {}

    async handle (request: LoadAllPostController.Request): Promise<HttpResponse> {
        try {
            const params = {
                accountId: parseInt(request.accountId as any),
                page: parseInt(request.page as any),
                limit: parseInt(request.limit as any),
                isFollowing: !!+request.isFollowing
            }
            const posts = await this.loadPost.load(params)
            return ok(posts)
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace LoadAllPostController {
    export type Request = {
        isFollowing?: boolean,
        accountId?: number,
        page: number,
        limit: number
    }
}