export interface AddUnfollowRepository {
    unfollow: (params: AddUnfollowRepository.Request) => Promise<void>
}

export namespace AddUnfollowRepository {
    export type Request = {
        followId: number,
        userId: number
    }
}