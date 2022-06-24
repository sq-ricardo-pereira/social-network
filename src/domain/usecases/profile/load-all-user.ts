export interface LoadAllUser {
    load: (params: LoadAllUser.Request) => Promise<LoadAllUser.Result[]>
}

export namespace LoadAllUser {
    export type Result = {
        id: number,
        userName: string,
        firstName: string,
        lastName: string,
        isFollowing: boolean
    }
    export type Request = {
        accountId: number,
        page: number,
        limit: number
    }
}

