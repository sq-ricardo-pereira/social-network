import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { serverError, ok, forbidden, badRequest } from '@/presentation/helpers'
import { AddFollow } from '@/domain/usecases'
import { AlreadyFollowingError } from '@/presentation/errors'

export class AddFollowController implements Controller {
    constructor (private readonly addFollow: AddFollow, private readonly validation: Validation) {}
    async handle (request: AddFollowController.Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request)
            if (error) {
                return badRequest(error)
            }

            const params = {
                userId: request.accountId,
                followUserId: request.followUserId
            }
            const result = await this.addFollow.add(params)
            if (result === true) {
                return forbidden(new AlreadyFollowingError())
            }

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace AddFollowController {
    export type Request = {
        accountId: number,
        followUserId: number
    }
}