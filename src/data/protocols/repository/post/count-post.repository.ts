export interface CountPostRepository {
    count: (accountId: number) => Promise<number>
}