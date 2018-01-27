import axios from 'axios';

import {
  FETCH_NOTICE_INIT,
  FETCH_NOTICE_COMPLETE,
  FETCH_NOTICE_FAIL,
} from '../actions/types';
import {
  API_ENDPOINT,
} from 'react-native-dotenv';


export const fetchNoticeRequest = () => (dispatch) => {
  dispatch({ type: FETCH_NOTICE_INIT });

  axios.get(`${API_ENDPOINT}/api/v1.0/get_notice`)
    .then((response) => {
      if (response.data.success === true) {
        console.log(response.data);
        fetchNoticeComplete(dispatch, response.data);
      }
    })
    .catch((e) => {
      console.log('Error while fetching notice!');
    });
};

export const fetchNoticeFail = (dispatch) => {
  dispatch({
    type: FETCH_NOTICE_FAIL,
  });
};

export const fetchNoticeComplete = (dispatch, response) => {
  dispatch({
    type: FETCH_NOTICE_COMPLETE,
    payload: response.data,
  });
};
