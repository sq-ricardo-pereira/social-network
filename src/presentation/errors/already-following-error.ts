export class AlreadyFollowingError extends Error {
    constructor() {
        super('Already Following')
        this.name = 'AlreadyFollowingError'
    }
}
