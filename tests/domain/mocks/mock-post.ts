import { faker } from '@faker-js/faker'

import { PostModel } from '@/domain/models'
import { PostType } from '@/data/enums'

export const mockPostDefaultModel = (): PostModel => {
    return {
        id: faker.datatype.number(),
        description: faker.random.words(),
        userId: faker.datatype.number({min: 30, max: 30}),
        createdAt: new Date(),
        type: PostType.DEFAULT
    }
}