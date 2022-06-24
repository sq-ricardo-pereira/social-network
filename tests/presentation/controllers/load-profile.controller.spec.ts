import { faker } from '@faker-js/faker'

import { LoadProfileController } from '@/presentation/controllers'
import { LoadProfileSpy } from '@/tests/presentation/mocks'

const mockRequest = (): LoadProfileController.Request => ({
    accountId: faker.datatype.number({min: 0, max: 50})
})

type SutTypes = {
    sut: LoadProfileController,
    loadProfileSpy: LoadProfileSpy
}

const makeSut = (): SutTypes => {
    const loadProfileSpy = new LoadProfileSpy()
    const sut = new LoadProfileController(loadProfileSpy)
    return {
        sut,
        loadProfileSpy
    }
}

describe('LoadProfile Controller', () => {

    test('Should call LoadProfile with correct value', async () => {
        const { sut, loadProfileSpy } = makeSut()
        const request = mockRequest()
        await sut.handle(request)
        expect(loadProfileSpy.accountId).toBe(request.accountId)
    })
})