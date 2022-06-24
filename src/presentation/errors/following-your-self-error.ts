export class FollowingYourSelfError extends Error {
    constructor() {
        super('Following yourself is not allowed')
        this.name = 'FollowingYourSelfError'
    }
}
