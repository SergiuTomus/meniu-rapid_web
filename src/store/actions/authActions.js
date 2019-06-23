import axios from 'axios';
import { SET_CURRENT_USER, GET_ERRORS } from './types';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';

// Set login user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


// Login - Get User Token
export const loginUser = (user) => {
  return (dispatch) => {  // we have dispatch because we use redux-thunk
    axios.post('https://rocky-lowlands-58601.herokuapp.com/admin/login', user)
      .then(result => {
        console.log(result.data);
        const { token } = result.data;
        localStorage.setItem('jwtToken', token); // set token to localStorage
        setAuthHeader(token);       // Set token to Authorization header
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };
}

// Logout
export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('jwtToken'); // remove token from localStorage
    setAuthHeader(false);                // remove token from Authorization header 
    dispatch(setCurrentUser({}));        // set current user to {}
  }
} 