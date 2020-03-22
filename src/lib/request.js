import axios from 'axios'
import { getCookie } from './session'
import * as enVariables from './config'

// global API HOST ( API Domain URL)
const API_HOST = enVariables.API_HOST

// Merging a full URL - for e.g. ->   "https://wwww.apiurl.com"  + "/users"
const getUrl = endpoint => API_HOST + endpoint

// Making a POST request (without token), use this function for all POST requests in project
export const post = async (endpoint, data) => {
  return axios.post(getUrl(endpoint), data, {
    headers: { 'Content-Type': 'application/json', 'language': 'en' }
  })
}

// Making a PATCH request (without token), use this function for all PATCH requests in project
export const patch = async (endpoint, data) => {
  return axios.patch(getUrl(endpoint), data, {
    headers: { 'Content-Type': 'application/json', 'language': 'en' }
  })
}

// Making a GET request, use this function for all GET requests in project
export const get = async (endpoint) => {
  axios.defaults.headers.common['authorization'] = await getCookie('token', '')
  return axios.get(getUrl(endpoint), {
    headers: { 'Content-Type': 'application/json', 'language': 'en' }
  })
}

// Making a POST request (with token), use this function for all POST requests in project
export const postWithToken = async (endpoint, data) => {
  axios.defaults.headers.common['authorization'] = await getCookie('token', '')
  return axios.post(getUrl(endpoint), data, {
    headers: { 'Content-Type': 'application/json', 'language': 'en' }
  })
}

// Making a PATCH request (with token), use this function for all PATCH requests in project
export const patchWithToken = async (endpoint, data) => {
  axios.defaults.headers.common['authorization'] = await getCookie('token', '')
  return axios.patch(getUrl(endpoint), data, {
    headers: { 'Content-Type': 'application/json', 'language': 'en' }
  })
}

// Making a PUT request (with token), use this function for all PUT requests in project
export const putWithToken = async (endpoint, data) => {
  axios.defaults.headers.common['authorization'] = await getCookie('token', '')
  return axios.put(getUrl(endpoint), data, {
    headers: { 'Content-Type': 'application/json', 'language': 'en' }
  })
}

// Making a DELETE request (with token), use this function for all DELETE requests in project
export const deleteReq = async (endpoint) => {
  axios.defaults.headers.common['authorization'] = await getCookie('token', '')
  return axios.delete(getUrl(endpoint), {
    headers: { 'Content-Type': 'application/json', 'language': 'en' }
  })
}
