export const getAllUserPath = {
    get: {
      security: [{
        apiKeyAuth: []
      }],
      tags: ['Customer'],
      summary: 'API to get all user whether user following or not',
      parameters: [{
        in: 'query',
        name: 'limit',
        description: 'Post limit per page',
        required: true,
        schema: {
          type: 'number'
        }
      }, {
        in: 'query',
        name: 'page',
        description: 'Current page',
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
                $ref: '#/schemas/getAllUser'
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
  