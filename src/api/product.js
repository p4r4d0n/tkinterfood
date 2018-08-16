import api from './main'

const serviceName = 'products'

export default {
  list(id) {
    return api.request('axios', 'get', `${serviceName}/category/${id}`)
  },
  get(id) {
    return api.request('axios', 'get', `${serviceName}/${id}`)
  },
  // filter(categoryId) {
  //   return api.request('axios', 'get',
  //     `${serviceName}/category/${categoryId}`)
  // },
  // filterProduct(categoryId, brandId, sort) {
  //   return api.request('axios', 'get',
  //     `${serviceName}/filter?category_id=${categoryId}&brand_id=${brandId}&sort=${sort}`)
  // }

}
