import { ProfileModel } from '@/domain/models'

export interface LoadAllUserRepository {
    load: (params: LoadAllUserRepository.Request) => Promise<LoadAllUserRepository.Result[]>
}

export namespace LoadAllUserRepository {
    export type Result = {
        id?: number
        userName: string
        firstName: string
        lastName: string,
        following: ProfileModel[]
    }
    export type Request = {
        accountId: number,
        limit: number,
        page: number
    }
}