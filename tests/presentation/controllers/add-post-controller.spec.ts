import { faker } from '@faker-js/faker'

import { AddPostController } from '@/presentation/controllers'
import { AddPostSpy, ValidationSpy } from '@/tests/presentation/mocks'
import { PostType } from '@/data/enums'

const mockRequestPostDefault = (): AddPostController.Request => ({
    description: faker.random.words(),
    accountId: faker.datatype.number({min: 30, max: 30}),
    type: PostType.DEFAULT,
})

type SutTypes = {
    sut: AddPostController,
    addPostSpy: AddPostSpy,
    validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
    const addPostSpy = new AddPostSpy()
    const validationSpy = new ValidationSpy()
    const sut = new AddPostController(addPostSpy, validationSpy)
    return {
        sut,
        addPostSpy,
        validationSpy
    }
}

describe('AddPost Controller', () => {
    test('Should call AddPost Default with correct value', async () => {
        const { sut, addPostSpy } = makeSut()
        const request = mockRequestPostDefault()
        await sut.handle(request)
        const date = new Date()
        const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` as any
        const params = {
            userId: request.accountId,
            description: request.description,
            type: request.type,
            createdAt: today,
        }
        expect(addPostSpy.request).toEqual(params)
    })
})