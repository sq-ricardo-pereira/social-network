import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { LoadPostByAccountId } from '@/domain/usecases'

export class LoadPostController implements Controller {
    constructor (private readonly loadPost: LoadPostByAccountId) {}

    async handle (request: LoadPostController.Request): Promise<HttpResponse> {
        try {
            const params = {
                accountId: parseInt(request.accountId as any),
                page: parseInt(request.page as any),
                limit: parseInt(request.limit as any)
            }
            const posts = await this.loadPost.loadByAccountId(params)
            return ok(posts)
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace LoadPostController {
    export type Request = {
        accountId: number,
        page: number,
        limit: number
    }
}