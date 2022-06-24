import { FollowSqlServerRepository } from '@/infra/db/sequelize';
import { AddUnfollow } from '@/domain/usecases'
import { DbAddUnfollow } from '@/data/usecases'

export const makeDbAddUnfollow = (): AddUnfollow => {
    const followSqlServerRepository = new FollowSqlServerRepository()
    return new DbAddUnfollow(followSqlServerRepository)
}