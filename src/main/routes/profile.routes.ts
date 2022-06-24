import { Router } from 'express'

import { makeLoadProfileController, makeLoadAllUserController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
    router.get('/profile', auth, adaptRoute(makeLoadProfileController()))
    router.get('/profile/all-user', auth, adaptRoute(makeLoadAllUserController()))
}
