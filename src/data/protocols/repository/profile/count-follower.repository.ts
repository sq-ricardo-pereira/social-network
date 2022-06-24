export interface CountFollowerRepository {
    countFollower: (accountId: number) => Promise<number>
}