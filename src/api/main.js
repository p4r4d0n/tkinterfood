import Vue from 'vue'
import axios from 'axios'
import config from '../config'

export default {
  request (type = 'vue', method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    let url = config.serverURI + uri
    let headers = {Authorization: 'provision'}

    switch (type) {
      case 'axios':
        return axios({method, url, data, headers})
      case 'vue':
        return Vue.http({method, url, body: data, headers})
    }
  }
}

