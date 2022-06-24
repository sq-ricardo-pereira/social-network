import { makeDbLoadProfile } from '@/main/factories/usecases'
import { Controller } from '@/presentation/protocols'
import { LoadProfileController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators/log'

export const makeLoadProfileController = (): Controller => {
    const controller = new LoadProfileController(makeDbLoadProfile())
    return new LogControllerDecorator(controller)
}