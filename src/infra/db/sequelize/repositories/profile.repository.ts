const { Op } = require("sequelize");

import { LoadProfileRepository, LoadAllUserRepository } from '@/data/protocols/repository';
import { Profile, Follow } from '@/infra/db/sequelize/models'

export class ProfileSqlServerRepository implements LoadProfileRepository, LoadAllUserRepository {

    async loadById (accountId: number): Promise<LoadProfileRepository.Result> {
        const profile = await Profile.findByPk(accountId) || {} as any
        return profile
    }

    async load (params: LoadAllUserRepository.Request): Promise<LoadAllUserRepository.Result[]> {
        return await Profile.findAll({
            attributes: ['id', 'userName', 'firstName', 'lastName'],
            where: {
                id: {
                    [Op.ne]: params.accountId
                }
            },
            include: [{
                model: Follow,
                as: 'following',
                where: {
                    userId: params.accountId
                },
                required: false,
            }]
        }) as any
    }

}