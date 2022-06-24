export const profileSchema = {
    type: 'object',
    properties: {
        userName: {
            type: 'string'
        },
        dateJoined: {
            type: 'string'
        },
        followers: {
            type: 'number'
        },
        following: {
            type: 'number'
        },
        numberPost: {
            type: 'number'
        }
    },
    required: ['userName', 'dateJoined', 'followers', 'following', 'numberPost']
}
