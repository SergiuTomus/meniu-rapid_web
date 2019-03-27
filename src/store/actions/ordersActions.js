import axios from 'axios';
import { GET_NEW_ORDERS, GET_RECEIVED_ORDERS, GET_ALL_ORDERS, ORDERS_LOADING, CANCEL_ORDER, ACCEPT_ORDER, DELIVER_ORDER, GET_ERRORS } from './types';

// Set loading state
export const setOrdersLoading = () => {
  return {
    type: ORDERS_LOADING
  };
};

// Get new orders
export const getNewOrders = (id) => {
  return (dispatch) => {
    dispatch(setOrdersLoading());
    axios
      .get(`http://localhost:3005/admin/new-orders/${id}`)
      .then(res =>
        dispatch({
          type: GET_NEW_ORDERS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_NEW_ORDERS,
          payload: null
        })
      );
  };
};

// Get received orders
export const getReceivedOrders = (id) => {
  return (dispatch) => {
    dispatch(setOrdersLoading());
    axios
      .get(`http://localhost:3005/admin/received-orders/${id}`)
      .then(res =>
        dispatch({
          type: GET_RECEIVED_ORDERS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_RECEIVED_ORDERS,
          payload: null
        })
      );
  };
};

// Get received orders
export const getAllOrders = (id) => {
  return (dispatch) => {
    dispatch(setOrdersLoading());
    axios
      .get(`http://localhost:3005/admin/all-orders/${id}`)
      .then(res =>
        dispatch({
          type: GET_ALL_ORDERS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ALL_ORDERS,
          payload: null
        })
      );
  };
};

// Cancel Order
export const cancelOrder = (id, user) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3005/admin/orders/${id}`, { status: "anulata", restaurant_user: user })
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
export const acceptOrder = (id, user) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3005/admin/orders/${id}`, { status: "preluata", restaurant_user: user })
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

// Deliver Order
export const deliverOrder = (id) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3005/admin/orders/${id}`, { status: "livrata" })
      .then(res =>
        dispatch({
          type: DELIVER_ORDER,
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