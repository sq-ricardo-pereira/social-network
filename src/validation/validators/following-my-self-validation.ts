import { Validation } from '@/presentation/protocols'
import { FollowingYourSelfError } from '@/presentation/errors'

export class FollowingMySelfValidation implements Validation {
    constructor(private readonly fieldName: string, private readonly accountId: string) { }

    validate(input: any): Error {
        if (input[this.fieldName] == input[this.accountId]) {
            return new FollowingYourSelfError()
        }
    }
}
