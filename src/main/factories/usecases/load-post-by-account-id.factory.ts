import { PostSqlServerRepository } from '@/infra/db/sequelize';
import { LoadPostByAccountId } from '@/domain/usecases'
import { DbLoadPost } from '@/data/usecases'

export const makeDbLoadPost = (): LoadPostByAccountId => {
    const postSqlServerRepository = new PostSqlServerRepository()
    return new DbLoadPost(postSqlServerRepository)
}