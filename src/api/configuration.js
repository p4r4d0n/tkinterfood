import api from './main';

const serviceName = 'configuration';

export default {
  get () {
    return api.request('axios', 'get', `${serviceName}`);
  }
};
