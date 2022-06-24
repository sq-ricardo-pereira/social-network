import { makeDbAddFollow } from '@/main/factories/usecases'
import { Controller } from '@/presentation/protocols'
import { AddFollowController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators/log'
import { makeAddFollowValidation } from '@/main/factories/controllers'

export const makeAddFollowController = (): Controller => {
    const controller = new AddFollowController(makeDbAddFollow(), makeAddFollowValidation())
    return new LogControllerDecorator(controller)
}