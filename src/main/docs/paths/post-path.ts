export const postPath = {
  post: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Post'],
    summary: 'API to create post',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addPostParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/addPostResult'
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
  },
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Post'],
    summary: 'API to get all posts',
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
    },{
      in: 'query',
      name: 'isFollowing',
      description: 'Just posts by you follow',
      required: true,
      schema: {
        type: 'number'
      }
    }],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/getUserPost'
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
