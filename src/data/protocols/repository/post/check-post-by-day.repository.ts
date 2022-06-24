export interface CheckPostByDayRepository {
    checkByDay: (userId: number) => Promise<CheckPostByDayRepository.Result>
}

export namespace CheckPostByDayRepository {
    export type Result = boolean
}
