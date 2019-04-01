
import { api, config } from '../../api';
import axios from 'axios';
const request = {
  callApi: async (endpoint, apiVersion, body, method = 'GET', token = null) => {
    try {
      token = token || (localStorage.getItem('userTk') ? localStorage.getItem('userTk') : api.getToken())

      let option = {
        method,
        url: `${config.HOST}/${endpoint}`,

        data: body,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token,
          // 'Accept-Language': api.getLang(),
          'Api-Version': apiVersion
        }
      }
      console.log({ option: option })
      // console.log('body data pst',)
      let response = await axios(option);

      // if (response.headers['new-token']) {
      //     //TODO: update token localstorage
      //     console.log("Received new token: ", response.headers['new-token'])
      //     localStorage.setItem('userTk')
      console.log('---------------------------RESPONSE------------------------------\n', 'option =>', option, '\n data ===>', response)
      // }
      return response;

    } catch (error) {
      // let response = await axios(option);
      // throw error.response;
      return error.response;
      // console.log(error.response)
      // console.log(error.response)

    }

  },
  upLoad: async (endpoint, apiVersion, method = 'POST', token = null, formData) => {
    try {
      token = token || (localStorage.getItem('userTk') ? localStorage.getItem('userTk') : api.getToken())
      let option = {
        url: `${config.HOST}/${endpoint}`,
        method, // or 'PUT'
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token,
          'Api-Version': apiVersion
        }
      };
      console.log({ option })
      let response = await axios(option);
      return response;
    } catch (error) {

      return error.response;


    }

  },
  posts: (url, data, token, apiVerson) => {

    if ((url + '').indexOf('http') == -1) url = config.HOST + '/' + url
    let status = null
    if (data != '') {
      return fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': (token ? token : localStorage.getItem('userTK')),
          'Api-Version': (apiVerson ? apiVerson : '')
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        status = response.status
        console.log('RESPONSE', response)
        return response.json()
      }, function (error) {
        console.log('errorGet', error)
      }).then(function (data) { return { status, data } }, function (err) {
        console.log(err)
      })
    } else {
      return fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': (token ? token : localStorage.getItem('userTK')),
          'Api-Version': (apiVerson ? apiVerson : '')
        },
      }).then(function (response) {
        status = response.status
        console.log('RESPONSE', response)
        return response.json()
      }, function (error) {
        console.log('errorGet', error)
      }).then(function (data) { return { status, data } }, function (err) {
        console.log(err)
      })
    }
  },
  get: (url, data, token, apiVerson) => {
    let passingValue = (data ? '?' : '') + (data.storeId?'storeId='+data.storeId+'&':'')+( data.from?'from='+data.from+'&':'')+(data.to?'to='+data.to:'')+(data.partnerId ? 'partnerId=' + data.partnerId : '')  +(data.departmentId ? '&departmentId=' + data.departmentId : '') + (data.skip ? 'skip=' + data.skip : '') + (data.populate ? '&populate=' + data.populate : '') + (data.select ? '&select=' + data.select : '') + (data.limit ? '&limit=' + data.limit : '') + (data.sort ? '&sort=' + JSON.stringify(data.sort) : '') + (data.where ? '&where=' + JSON.stringify(data.where) : '')

    if ((url + '').indexOf('http') == -1) url = config.HOST + '/' + url + passingValue
    console.log('getRequest', url)
    let status = null
    return fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': (token ? token : localStorage.getItem('userTK')),
        'Api-Version': (apiVerson ? apiVerson : 3)
      },
    }).then(function (response) {
      status = response.status
      return response.json()
    }, function (error) {
      console.log('errorGet', error)
    }).then(function (data) { return { status, data } }, function (err) {
      console.log(err)
    })
  },
  put: (url, data, token, apiVerson) => {
    if ((url + '').indexOf('http') == -1) url = config.HOST + '/' + url
    console.log('post', url, '\n data patch', data)
    let status = null
    return fetch(url, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token ? token : localStorage.getItem('userTK'),
        'Api-Version': (apiVerson ? apiVerson : 3)
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      status = response.status
      console.log('RESPONSE', response)
      return response.json()
    }, function (error) {
      console.log('errorGet', error)
    }).then(function (data) { return { status, data } }, function (err) {
      console.log(err)
    })
  },
}

// .replace(/\"/g, '')
// .replace(/\"/g, '')
export default request
