import { mockProfileModel } from '@/tests/domain/mocks'
import { LoadProfileDetails } from '@/domain/usecases'

export class LoadProfileSpy implements LoadProfileDetails {
    accountId: number
    result = mockProfileModel()

    async load (accountId: number): Promise<LoadProfileDetails.Result> {
        this.accountId = accountId
        return this.result
    }
}