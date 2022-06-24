import { ProfileSqlServerRepository, FollowSqlServerRepository, PostSqlServerRepository } from '@/infra/db/sequelize';
import { LoadProfileDetails } from '@/domain/usecases'
import { DbLoadProfile } from '@/data/usecases'

export const makeDbLoadProfile = (): LoadProfileDetails => {
    const profileSqlServerRepository = new ProfileSqlServerRepository()
    const followSqlServerRepository = new FollowSqlServerRepository()
    const postSqlServerRepository = new PostSqlServerRepository()
    return new DbLoadProfile(profileSqlServerRepository, followSqlServerRepository, followSqlServerRepository, postSqlServerRepository)
}