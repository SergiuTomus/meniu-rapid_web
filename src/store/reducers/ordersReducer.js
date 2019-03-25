import { GET_ORDERS } from "../actions/types";

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
    case "":
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case "CLEAR_PROFILE":
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}