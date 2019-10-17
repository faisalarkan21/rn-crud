import {GET_USERS} from '../actions/users';

export function getUsers(state = {data: []}, action) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
}
