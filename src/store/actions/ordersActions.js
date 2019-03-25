import axios from 'axios';
import { GET_ORDERS, ORDERS_LOADING } from './types';

// Set loading state
export const setOrdersLoading = () => {
  return {
    type: ORDERS_LOADING
  };
};

// Get Orders
export const getNewOrders = () => {
  return (dispatch) => {
    dispatch(setOrdersLoading());
    axios
      .get('http://localhost:3005/admin/new-orders/1') // Restaurant id = 
      .then(res =>
        dispatch({
          type: GET_ORDERS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ORDERS,
          payload: null
        })
      );
  };
};