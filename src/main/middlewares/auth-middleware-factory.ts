import jwt from 'jsonwebtoken'

import { adaptMiddleware } from '@/main/adapters'
import { HttpResponse, Middleware } from '@/presentation/protocols'
import env from '@/main/config/env'

class MakeSimpleMiddleware implements Middleware {
  async handle (request: MakeSimpleMiddleware.Request): Promise<HttpResponse> {
    try {
      if (!request?.accessToken) {
        return {
          statusCode: 401,
          body: {
            message: 'Invalid credentials'
          }
        }
      }

      const { id } = jwt.verify(request.accessToken, env.jwtSecret) as any
      return {
        statusCode: 200,
        body: {
          accountId: id
        }
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: {
          message: 'Internal server error' 
        }
      }
    }
  }
}

namespace MakeSimpleMiddleware {
  export type Request = {
    accessToken?: string
  }
}

export const auth = adaptMiddleware(new MakeSimpleMiddleware())
