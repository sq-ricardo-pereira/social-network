import { ProfileDetailsModel } from '@/domain/models'

export interface LoadProfileDetails {
    load: (accountId: number) => Promise<LoadProfileDetails.Result>
}

export namespace LoadProfileDetails {
    export type Result = ProfileDetailsModel
}