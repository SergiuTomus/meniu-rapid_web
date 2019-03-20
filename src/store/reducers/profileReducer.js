
const initialState = {
  profile: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CEVA":
      return {
        ...state
      };
    default:
      return state;
  }
}