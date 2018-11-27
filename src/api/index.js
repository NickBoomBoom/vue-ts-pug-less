import axios from 'axios'
import Cookies from 'js-cookie'
// import Config from '../config'
import test from './topic'

// 实例化 ajax请求对象
const ajaxinstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: Config.apiBaseUrl,
  timeout: 10000,
  headers: {
    responseType: 'json',
    'Content-Type': 'application/json; charset=utf-8'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxinstance
  .interceptors
  .request
  .use((config) => {
    // TODO
    let tp = Cookies.get('top_session')
    if (tp) {
      config['headers']['topsession'] = tp
    }
    return config
  }, (error) => {
    Promise.reject(error)
  })

// 请求响应拦截器
ajaxinstance
  .interceptors
  .response
  .use((response) => {
    // TODO
    let { data } = response
    if(data.status === 'error' && data.result.error_code === 6001){
      let curUrl = location.href
      location.href = Config.commonAdmin + '/#/login?referer=' + encodeURIComponent(curUrl)
    }
    return data
  }, (error) => {
    return Promise.reject(error)
  })

/**
 * [API api接口封装]
 * @type {Object}
 */
const API = {
  ...test(ajaxinstance),
};

export default API
