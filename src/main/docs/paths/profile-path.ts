export const profilePath = {
    get: {
        security: [{
            apiKeyAuth: []
      }],
      tags: ['Customer'],
      summary: 'API to get profile',
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#/schemas/profile'
              }
            }
          }
        },
        400: {
          $ref: '#/components/badRequest'
        },
        401: {
          $ref: '#/components/unauthorized'
        },
        404: {
          $ref: '#/components/notFound'
        },
        500: {
          $ref: '#/components/serverError'
        }
      }
    }
  }
  