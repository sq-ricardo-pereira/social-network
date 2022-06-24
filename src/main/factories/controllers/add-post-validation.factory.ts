import { ValidationComposite, RequiredFieldValidation, PostDescriptionValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddPostValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['description', 'type']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new PostDescriptionValidation('description'))
  return new ValidationComposite(validations)
}
