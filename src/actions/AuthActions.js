import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  ROLL_NUMBER_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CONFIRM_CHANGED,
  EMAIL_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  REGISTER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from './types';
import {
  API_ENDPOINT,
} from 'react-native-dotenv';

export const firstNameChanged = firstName => ({
  type: FIRST_NAME_CHANGED,
  payload: firstName,
});

export const lastNameChanged = lastName => ({
  type: LAST_NAME_CHANGED,
  payload: lastName,
});

export const emailChanged = email => ({
  type: EMAIL_CHANGED,
  payload: email,
});

export const rollNumberChanged = rollNumber => ({
  type: ROLL_NUMBER_CHANGED,
  payload: rollNumber,
});

export const passwordChanged = password => ({
  type: PASSWORD_CHANGED,
  payload: password,
});

export const passwordConfirmChanged = passwordConfirm => ({
  type: PASSWORD_CONFIRM_CHANGED,
  payload: passwordConfirm,
});

export const loginRequest = ({ rollNumber, password }) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios({
    url: `${API_ENDPOINT}/api/v1.0/login`,
    method: 'post',
    data: {
      rollNumber,
      password,
    },
  })
    .then((response) => {
      console.log(response.data);
      if (response.data.success === true) {
        loginUserSuccess(dispatch, response);
      } else {
        loginUserFail(dispatch);
      }
    })
    .catch((e) => {
      console.log(e);
      loginUserFail(dispatch);
    });
};

export const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
  console.log('Login failed');
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.home({ type: 'reset' });
};


export const registerRequest = ({
  firstName, lastName, rollNumber, email, password, passwordConfirm,
}) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  axios({
    url: `${API_ENDPOINT}/api/v1.0/register`,
    method: 'post',
    data: {
      firstName, lastName, rollNumber, email, password, passwordConfirm,
    },
  })
    .then((response) => {
      console.log(response.data);
      if (response.data.success === true) {
        registerUserSuccess(dispatch, response);
      } else {
        registerUserFail(dispatch);
      }
    })
    .catch((e) => {
      console.log(e);
      registerUserFail(dispatch);
    });
};

export const registerUserFail = (dispatch) => {
  dispatch({
    type: REGISTER_USER_FAIL,
  });
  console.log('Register user fail');
};

export const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  });
  Actions.home({ type: 'reset' });
};
