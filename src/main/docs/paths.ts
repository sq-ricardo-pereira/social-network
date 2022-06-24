import {
  profilePath,
  postPath,
  getUserPostPath,
  tokenPath,
  followPath,
  getAllUserPath,
  unfollowPath
} from './paths/'

export default {
  '/profile': profilePath,
  '/post': postPath,
  '/get-user-post': getUserPostPath,
  '/createToken/{accountId}': tokenPath,
  '/follow': followPath,
  '/profile/all-user': getAllUserPath,
  '/unfollow': unfollowPath
}
