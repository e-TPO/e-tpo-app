import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NoticeReducer from './NoticeReducer';

const reducers = combineReducers({
  auth: AuthReducer,
  notice: NoticeReducer,
});

export default reducers;
