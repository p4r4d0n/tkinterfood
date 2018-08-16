import api from './main';

const serviceName = 'services';

export default {
  list () {
    // return 
    return api.request('axios', 'get', `${serviceName}`);
  },
  get (id) {
    return api.request('axios', 'get', `${serviceName}/${id}`);
  }

};
