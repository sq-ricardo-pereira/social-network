import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Social Network',
    description: '',
    version: '1.0.0',
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Customer',
    description: 'APIs related to Customer'
  }, {
    name: 'Post',
    description: 'APIs related to Post'
  }, {
    name: 'Follow',
    description: 'APIs related to Follow'
  }],
  paths,
  schemas,
  components
}
