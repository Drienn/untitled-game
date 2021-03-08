export const axiosConfig = (additionalHeaders) => ({
  ...{
    crossDomain: true,
    headers: {
      // 'Access-Control-Allow-Origin': 'https://www.weeziesdesignstudio.com',
      // 'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      ...additionalHeaders,
    },
    // withCredentials: true,
  },
});

export default axiosConfig;
