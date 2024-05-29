const initialState = {
  user: {
    id: null,
    email: null,
  },
  error: null,
};
  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_UP_SUCCESS':
      case 'SIGN_IN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case 'SIGN_UP_ERROR':
      case 'SIGN_IN_ERROR':
      case 'SIGN_OUT_ERROR':
        return {
          ...state,
          user: null,
          error: action.payload,
        };
      case 'SIGN_OUT_SUCCESS':
        return {
          ...state,
          user: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
export default authReducer;
