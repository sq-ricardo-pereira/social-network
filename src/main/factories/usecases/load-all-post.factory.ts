import { PostSqlServerRepository } from '@/infra/db/sequelize';
import { LoadAllPost } from '@/domain/usecases'
import { DbLoadAllPost } from '@/data/usecases'

export const makeDbLoadAllPost = (): LoadAllPost => {
    const postSqlServerRepository = new PostSqlServerRepository()
    return new DbLoadAllPost(postSqlServerRepository)
}