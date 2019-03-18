import axios from 'axios';
import { SET_CURRENT_USER, GET_ERRORS } from './types';

// Set login user
export const setCurrentUser = (userData) => {
  return {
    type: SET_CURRENT_USER,
    payload: userData
  };
};


// Login - Get User Token
export const loginUser = (user, history) => {
  return (dispatch) => {  // we have dispatch because we use redux-thunk
    axios.post('http://localhost:3005/client/login', user)
      .then(result => {
        history.push('/orders');   // redirect using Router 
        console.log(result.data);
        dispatch(setCurrentUser(user));
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };
}