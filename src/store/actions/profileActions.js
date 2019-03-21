import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_PROFILE, GET_ERRORS, SET_CURRENT_USER } from './types';

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Get current profile
export const getUserProfile = () => {
  return (dispatch) => {
    dispatch(setProfileLoading());
    axios
      .get('http://localhost:3005/admin/user')
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err => {
        console.log(err);
        return dispatch({
          type: GET_PROFILE,
          payload: {}
        });
      }

      );
  };
};

// Clear profile
export const clearProfile = () => {
  return {
    type: CLEAR_PROFILE
  };
};