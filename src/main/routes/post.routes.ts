import { Router } from 'express'

import { makeAddPostController, makeLoadPostController, makeLoadAllPostController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
    router.post('/post', auth, adaptRoute(makeAddPostController()))
    router.get('/get-user-post', auth, adaptRoute(makeLoadPostController()))
    router.get('/post', auth, adaptRoute(makeLoadAllPostController()))
}
