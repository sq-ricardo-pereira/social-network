import { LoadAllPost } from '@/domain/usecases'
import { LoadAllPostRepository } from '@/data/protocols/repository'

export class DbLoadAllPost implements LoadAllPost {
    constructor (private readonly loadPostRepository: LoadAllPostRepository) {}

    async load (params: LoadAllPost.Request): Promise<LoadAllPost.Result> {
        const posts = await this.loadPostRepository.load(params)
        return posts.map(post => {
            return {
                id: post.id,
                description: post.description,
                userId: post.userId,
                originalPost: post.originalPost,
                createdAt: post.createdAt,
                type: post.type,
                postRoot: {
                    id: post.id,
                    description: post.description,
                    userId: post.userId,
                    originalPost: post.originalPost,
                    createdAt: post.createdAt,
                    type: post.type
                }
            } as any
        })
    }
} 