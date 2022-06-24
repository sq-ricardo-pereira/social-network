import { FollowSqlServerRepository } from '@/infra/db/sequelize';
import { AddFollow } from '@/domain/usecases'
import { DbAddFollow } from '@/data/usecases'

export const makeDbAddFollow = (): AddFollow => {
    const followSqlServerRepository = new FollowSqlServerRepository()
    return new DbAddFollow(followSqlServerRepository, followSqlServerRepository)
}