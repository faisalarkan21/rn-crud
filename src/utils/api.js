import Axios from 'axios';

const BASE_URL = 'http://5d60ae24c2ca490014b27087.mockapi.io/api/v1/';

export const getResponse = async params => {
  const data = await Axios.get(`${BASE_URL}${params}`).then(({data}) => data);
  return data;
};

export const postResponse = async (params, data) => {
  return await Axios.post(`${BASE_URL}${params}`, data).then(({data}) => data);
};
