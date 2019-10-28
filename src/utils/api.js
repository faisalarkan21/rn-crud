import Axios from 'axios';

const BASE_URL = 'http://10.0.2.2:3008/api';

export const getResponse = async params => {
  const data = await Axios.get(`${BASE_URL}${params}`).then(({data}) => data);
  return data;
};

export const postResponse = async (params, data) => {
  return await Axios.post(`${BASE_URL}${params}`, data).then(({data}) => data);
};
