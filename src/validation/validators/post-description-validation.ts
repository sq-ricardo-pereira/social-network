import { Validation } from '@/presentation/protocols'
import { SizeLimitError } from '@/presentation/errors'

export class PostDescriptionValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (input[this.fieldName].length > 777) {
      return new SizeLimitError(this.fieldName)
    }
  }
}
