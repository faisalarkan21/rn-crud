import axios from 'axios';
// import Cookies from 'cookies-js';
import {postResponse} from '../utils/api';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export function loginOnRequest(data) {
  return {
    type: LOGIN_SUBMIT,
    data,
  };
}

export function postLoginThunk(data) {
  return dispatch => {
    console.log('data', data);
    postResponse('/login', {
      email: data.email,
      password: data.password,
    }).then(data => {
      console.log('res', data);

      //   Cookies.set('token', data.token);
      //   Cookies.set('data', JSON.stringify({email: data.email}));
      //   Cookies.set('isValid', JSON.stringify({isValid: data.isValid}));

      dispatch(loginOnRequest(data));
    });
  };
}
