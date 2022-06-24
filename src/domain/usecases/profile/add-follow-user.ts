import { FollowModel } from '@/domain/models'

export interface AddFollow {
    add: (request: AddFollow.Request) => Promise<boolean>
}

export namespace AddFollow {
    export type Request = Omit<FollowModel, 'id'>
}