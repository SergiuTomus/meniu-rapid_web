import { GET_ORDERS, CANCEL_ORDER, ACCEPT_ORDER } from "../actions/types";

const initialState = {
  orders: [],
  order: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload.new_orders,
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
    default:
      return state;
  }
}