import { Router } from 'express'

import { makeAddUnfollowController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
    router.post('/unfollow', auth, adaptRoute(makeAddUnfollowController()))
}
