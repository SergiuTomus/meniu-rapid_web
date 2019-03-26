import axios from 'axios';
import { GET_ORDERS, ORDERS_LOADING, CANCEL_ORDER, ACCEPT_ORDER, GET_ERRORS } from './types';

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

// Cancel Order
export const cancelOrder = (id) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3005/admin/orders/${id}`, { status: "anulata" })
      .then(res =>
        dispatch({
          type: CANCEL_ORDER,
          payload: id
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Accept Order
export const acceptOrder = (id) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3005/admin/orders/${id}`, { status: "preluata" })
      .then(res =>
        dispatch({
          type: ACCEPT_ORDER,
          payload: id
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
}