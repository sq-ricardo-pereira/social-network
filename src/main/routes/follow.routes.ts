import { Router } from 'express'

import { makeAddFollowController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
    router.post('/follow', auth, adaptRoute(makeAddFollowController()))
}
