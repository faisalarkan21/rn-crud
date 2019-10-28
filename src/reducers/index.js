import {combineReducers} from 'redux';
import {getUsers} from './users';
import {loginUser} from './auth';

export default combineReducers({
  getUsers,
  loginUser,
});
