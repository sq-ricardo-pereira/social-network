import { makeDbLoadAllPost } from '@/main/factories/usecases'
import { Controller } from '@/presentation/protocols'
import { LoadAllPostController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators/log'

export const makeLoadAllPostController = (): Controller => {
    const controller = new LoadAllPostController(makeDbLoadAllPost())
    return new LogControllerDecorator(controller)
}