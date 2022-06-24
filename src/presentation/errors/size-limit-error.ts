export class SizeLimitError extends Error {
    constructor (paramName: string) {
      super(`Exceeded the limit: ${paramName}`)
      this.name = 'SizeLimitError'
    }
  }
  