import { makeDbLoadAllUser} from '@/main/factories/usecases'
import { Controller } from '@/presentation/protocols'
import { LoadAllUserController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators/log'

export const makeLoadAllUserController = (): Controller => {
    const controller = new LoadAllUserController(makeDbLoadAllUser())
    return new LogControllerDecorator(controller)
}