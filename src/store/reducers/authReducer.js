import isEmpty from '../../utils/is-empty';
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  authenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        authenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}