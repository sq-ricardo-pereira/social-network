export class LimitPostError extends Error {
    constructor () {
      super('You exceeded the limit of posts per day')
      this.name = 'LimitPostError'
    }
  }