import api from './main';

const serviceName = 'banner';

export default {
  get () {
    return api.request('axios', 'get', `${serviceName}`);
  }
};
