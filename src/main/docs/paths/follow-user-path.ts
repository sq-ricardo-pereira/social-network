export const followPath = {
    post: {
        security: [{
            apiKeyAuth: []
      }],
      tags: ['Follow'],
      summary: 'API to follow users',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/followUser'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
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
  