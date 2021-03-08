import axios from 'axios';
import { axiosConfig } from './axiosConfig';

const environment = process.env.NODE_ENV || 'development';

const baseUrlMap = {
  development: 'http://localhost:3000/api',
  // production: 'https://weezies-design-studio.herokuapp.com/api',
};

const baseURL = baseUrlMap[environment];
// const baseURL = '/api';

const configureURL = (url) => (url[0] === '/' ? `${baseURL}${url}` : url);

axios.defaults.withCredentials = true;

export const http = {
  get: (url, serverCookie) => axios
    .get(configureURL(url), axiosConfig(serverCookie))
    .then((res) => [res.data.data || res.data, null, res])
    .catch(async (err) => {
      await axios.post(configureURL('/error'), { data: err.response.data, err });
      return [null, err.response.data];
    }),
  put: (url, options) => axios
    .put(configureURL(url), options, axiosConfig())
    .then((res) => [res.data.data || res.data, null, res])
    .catch(async (err) => {
      await axios.post(configureURL('/error'), { data: err.response.data, err });
      return [null, err.response.data];
    }),
  post: (url, options, addHeaders) => axios
    .post(configureURL(url), options, axiosConfig(addHeaders))
    .then((res) => [res.data.data || res.data, null, res])
    .catch(async (err) => {
      await axios.post(configureURL('/error'), { data: err.response.data, err });
      return [null, err.response.data];
    }),
  delete: (url, options, addHeaders) => axios
    .delete(configureURL(url), { data: options }, axiosConfig(addHeaders))
    .then((res) => [res.data.data || res.data, null, res])
    .catch(async (err) => {
      await axios.post(configureURL('/error'), { data: err.response.data, err });
      return [null, err.response.data];
    }),
  raw: (options) => axios(options)
    .then((res) => [res.data.data || res.data, null, res])
    .catch(async (err) => {
      await axios.post(configureURL('/error'), { data: err.response.data, err });
      return [null, err.response.data];
    }),
};

export default http;
