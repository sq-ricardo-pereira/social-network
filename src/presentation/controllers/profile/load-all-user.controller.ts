import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers'
import { LoadAllUser } from '@/domain/usecases'

export class LoadAllUserController implements Controller {
    constructor (private readonly loadAllUser: LoadAllUser) {}

    async handle (request: LoadAllUserController.Request): Promise<HttpResponse> {
        try {
            const users = await this.loadAllUser.load(request)
            return ok(users)
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace LoadAllUserController {
    export type Request = LoadAllUser.Request
}