export interface CountFollowingRepository {
    countFollowing: (accountId: number) => Promise<number>
}