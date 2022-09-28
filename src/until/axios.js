// 测试  --请求拦截

import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log(config)
  if (config.method === 'get') {
    if (config.params) {
      config.params.comm_name = 'heyu'
    }
  }
  if (config.method === 'post') {
    if (config.data) {
      config.data.comm_age = '27'
    }
  }
  return config
})

axios.interceptors.response.use(res => {
  console.log(res)
  return res
})
axios.defaults.baseURL='/test'

export default axios
