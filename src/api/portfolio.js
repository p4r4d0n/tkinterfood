import api from './main'

const serviceName = 'portfolios'

export default {
  list () {
    return api.request('axios', 'get', `${serviceName}`)
  },
  get (id) {
    return api.request('axios', 'get', `${serviceName}/${id}`)
  }

}
