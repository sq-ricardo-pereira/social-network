import { makeDbLoadPost } from '@/main/factories/usecases'
import { Controller } from '@/presentation/protocols'
import { LoadPostController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators/log'

export const makeLoadPostController = (): Controller => {
    const controller = new LoadPostController(makeDbLoadPost())
    return new LogControllerDecorator(controller)
}