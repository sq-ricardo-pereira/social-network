import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { LoadProfileDetails } from '@/domain/usecases'

export class LoadProfileController implements Controller {
    constructor (private readonly loadProfile: LoadProfileDetails) {}

    async handle (request: LoadProfileController.Request): Promise<HttpResponse> {
        try {
            const profile = await this.loadProfile.load(request.accountId)
            return ok(profile)
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace LoadProfileController {
    export type Request = {
        accountId: number
    }
}