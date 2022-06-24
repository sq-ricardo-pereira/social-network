import {
    accountSchema,
    errorSchema,
    addPostParamsSchema,
    addPostResultSchema,
    getUserPostSchema,
    tokenParamsSchema,
    followUserSchema,
    getAllUserSchema,
    userFollowSchema,
    profileSchema,
    postResultSchema,
    postSchema,
    unfollowUserSchema
} from './schemas/'

export default {
    account: accountSchema,
    error: errorSchema,
    addPostParams: addPostParamsSchema,
    addPostResult: addPostResultSchema,
    getUserPost: getUserPostSchema,
    token: tokenParamsSchema,
    followUser: followUserSchema,
    getAllUser: getAllUserSchema,
    userFollow: userFollowSchema,
    profile: profileSchema,
    postResult: postResultSchema,
    post: postSchema,
    unfollowUser: unfollowUserSchema
}
