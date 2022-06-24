import { PostSqlServerRepository } from '@/infra/db/sequelize';
import { AddPost } from '@/domain/usecases'
import { DbAddPost } from '@/data/usecases'

export const makeDbAddPost = (): AddPost => {
    const postSqlServerRepository = new PostSqlServerRepository()
    return new DbAddPost(postSqlServerRepository, postSqlServerRepository)
}