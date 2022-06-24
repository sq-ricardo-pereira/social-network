import { makeDbAddPost } from '@/main/factories/usecases'
import { Controller } from '@/presentation/protocols'
import { AddPostController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators/log'
import { makeAddPostValidation } from '@/main/factories/controllers'

export const makeAddPostController = (): Controller => {
    const controller = new AddPostController(makeDbAddPost(), makeAddPostValidation())
    return new LogControllerDecorator(controller)
}