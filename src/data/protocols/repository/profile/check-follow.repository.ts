export interface CheckFollowRepository {
    check: (followerId: number) => Promise<CheckFollowRepository.Result>
}

export namespace CheckFollowRepository {
    export type Result = boolean
}
