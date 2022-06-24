import { LoadPostByAccountId } from '@/domain/usecases'
import { LoadPostByAccountIdRepository } from '@/data/protocols/repository'

export class DbLoadPost implements LoadPostByAccountId {
    constructor (private readonly loadPostRepository: LoadPostByAccountIdRepository) {}

    async loadByAccountId (params: LoadPostByAccountId.Request): Promise<LoadPostByAccountId.Result> {
        return await this.loadPostRepository.loadByAccountId(params)
    }
} 