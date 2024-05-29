// initial state for the cart
const initialState = {
    cartItems: [], // You can store your cart items here
  };
  
// cart reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('add to cart', action.payload);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.name !== action.payload.name),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
  
export default cartReducer; 
