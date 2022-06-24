import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { AddUnfollow } from '@/domain/usecases'

export class AddUnfollowController implements Controller {
    constructor (private readonly addUnfollow: AddUnfollow) {}
    async handle (request: AddUnfollowController.Request): Promise<HttpResponse> {
        try {
            const result = await this.addUnfollow.unfollow(request)
            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace AddUnfollowController {
    export type Request = {
        accountId: number,
        followId: number
    }
}