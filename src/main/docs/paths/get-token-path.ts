export const tokenPath = {
    get: {
      tags: ['Token'],
      summary: 'API to create user token',
      parameters: [{
        in: 'path',
        name: 'accountId',
        description: 'ID of user',
        required: true,
        schema: {
          type: 'number'
        }
      }],
      responses: {
        200: {
          description: 'Sucesso',
          content: {
            'application/json': {
              schema: {
                $ref: '#/schemas/account'
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
  