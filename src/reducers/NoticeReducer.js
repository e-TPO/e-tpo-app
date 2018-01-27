import { FETCH_NOTICE_INIT, FETCH_NOTICE_COMPLETE } from '../actions/types';

const INITIAL_STATE = {
  fetch: false,
  data: [
        'title': 'Default title',
        'description': 'Description...............',
  ],
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTICE_INIT:
      return { ...state, fetch: true };
    case FETCH_NOTICE_COMPLETE:
      return { ...state, fetch: false, data: action.payload };
    default:
      return state;
  }
};
