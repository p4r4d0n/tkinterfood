import api from './main'

const serviceName = 'about'

export default {
  get () {
    return api.request('axios', 'get', `${serviceName}`)
  },
  store (data) {
    return api.request('axios', 'post', `contact`, data)
  }
}
