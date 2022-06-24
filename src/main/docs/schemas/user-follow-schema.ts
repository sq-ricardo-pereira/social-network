export const userFollowSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        userName: {
            type: 'string'
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        isFollowing: {
            type: 'boolean'
        }
    },
    required: ['id', 'userName', 'firstName', 'lastName', 'isFollowing']
}