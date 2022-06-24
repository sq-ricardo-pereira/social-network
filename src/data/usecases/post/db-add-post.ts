import { AddPost } from '@/domain/usecases'
import { AddPostRepository, CheckPostByDayRepository } from '@/data/protocols/repository'

export class DbAddPost implements AddPost {
    constructor (
        private readonly addPostRepository: AddPostRepository,
        private readonly checkPostByDayRepository: CheckPostByDayRepository
    ) {}
    
    async add (request: AddPost.Request): Promise<AddPost.Result> {
        let isValid = false
        let check = await this.checkPostByDayRepository.checkByDay(request.userId)
        if (!check[0][0]?.limitPost) {
            isValid = await this.addPostRepository.add(request) as any
        }

        return isValid as any
    }
}