export interface AddUnfollow {
    unfollow: (params: AddUnfollow.Request) => Promise<void>
}

export namespace AddUnfollow {
    export type Request = {
        followId: number,
        accountId: number
    }
}