import jwt from 'jsonwebtoken'
import { Router } from 'express'

import env from '@/main/config/env'

export default (router: Router): void => {
    router.get('/createToken/:accountId', (req, res) => {
        const jwtSign = jwt.sign({ id: req.params.accountId }, env.jwtSecret)
        res.status(200).json({accessToken: jwtSign})
    })
}
