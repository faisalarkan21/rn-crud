import {getResponse} from '../utils/api';

export const GET_USERS = 'GET_USERS';

export function getOnUsers(data) {
  return {
    type: GET_USERS,
    data,
  };
}

export function getUsersThunk() {
  return dispatch =>
    getResponse('http://127.0.0.1:8888/users').then(data => {
      console.log('data', data);
      dispatch(getOnUsers(data));
    });
}
