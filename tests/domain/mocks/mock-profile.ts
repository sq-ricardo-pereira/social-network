import { faker } from '@faker-js/faker'

import { ProfileDetailsModel } from '@/domain/models'

export const mockProfileModel = (): ProfileDetailsModel => {
    return {
        userName: faker.random.alphaNumeric(),
        dateJoined: faker.date.between('2020-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
        following: faker.datatype.number({min: 0, max: 50}),
        followers: faker.datatype.number({min: 0, max: 50}),
        numberPost: faker.datatype.number({min: 0, max: 50})
    }
}