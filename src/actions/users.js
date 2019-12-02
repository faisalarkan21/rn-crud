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
    getResponse('users')
      .then(data => {
        console.log('data', data);
        dispatch(getOnUsers(data));
      })
      .catch(err => {
        console.error(err);
      });
}
