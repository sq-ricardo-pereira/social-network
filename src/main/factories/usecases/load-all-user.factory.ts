import { ProfileSqlServerRepository } from '@/infra/db/sequelize';
import { LoadAllUser } from '@/domain/usecases'
import { DbLoadAllUser } from '@/data/usecases'

export const makeDbLoadAllUser = (): LoadAllUser => {
    const profileSqlServerRepository = new ProfileSqlServerRepository()
    return new DbLoadAllUser(profileSqlServerRepository)
}