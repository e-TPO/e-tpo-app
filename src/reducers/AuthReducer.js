import {
  LOGIN_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  ROLL_NUMBER_CHANGED,
  PASSWORD_CHANGED,
  REGISTER_REQUEST,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CONFIRM_CHANGED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  rollNumber: '16115032',
  password: 'qwertyuiop',
  passwordConfirm: '',
  user_token: null,
  fetching: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_NAME_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastName: action.payload };
    case ROLL_NUMBER_CHANGED:
      return { ...state, rollNumber: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case PASSWORD_CONFIRM_CHANGED:
      return { ...state, passwordConfirm: action.payload };
    case LOGIN_REQUEST:
      return { ...state, fetching: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state, fetching: false, error: 'Invaild credentials', password: '',
      };
    case REGISTER_REQUEST:
      return { ...state, fetching: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case REGISTER_USER_FAIL:
      return {
        ...state, fetching: false, error: 'Unable to register', password: '',
      };
    default:
      return state;
  }
};
