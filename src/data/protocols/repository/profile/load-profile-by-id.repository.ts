import { ProfileModel } from '@/domain/models'

export interface LoadProfileRepository {
    loadById: (accountId: number) => Promise<LoadProfileRepository.Result>
}

export namespace LoadProfileRepository {
    export type Result = ProfileModel
}