import { makeDbAddUnfollow } from '@/main/factories/usecases'
import { Controller } from '@/presentation/protocols'
import { AddUnfollowController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators/log'

export const makeAddUnfollowController = (): Controller => {
    const controller = new AddUnfollowController(makeDbAddUnfollow())
    return new LogControllerDecorator(controller)
}