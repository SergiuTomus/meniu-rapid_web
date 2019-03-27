import { GET_NEW_ORDERS, GET_RECEIVED_ORDERS, GET_ALL_ORDERS, CANCEL_ORDER, ACCEPT_ORDER, DELIVER_ORDER, ORDERS_LOADING } from "../actions/types";

const initialState = {
  orders: [],
  order: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_ORDERS:
      return {
        ...state,
        orders: action.payload.new_orders,
        loading: false
      };
    case GET_RECEIVED_ORDERS:
      return {
        ...state,
        orders: action.payload.received_orders,
        loading: false
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload.all_orders,
        loading: false
      };
    case CANCEL_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload)
      };
    case ACCEPT_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload)
      };
    case DELIVER_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload)
      };
    case ORDERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}