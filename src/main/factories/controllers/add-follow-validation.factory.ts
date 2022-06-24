import { ValidationComposite, RequiredFieldValidation, FollowingMySelfValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddFollowValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  validations.push(new RequiredFieldValidation('followUserId'))
  validations.push(new FollowingMySelfValidation('followUserId', 'accountId'))
  return new ValidationComposite(validations)
}
