import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case DECREASE:
      console.log('increase');
    case INCREASE:
      console.log('decrease');
    case CLEAR_CART:
      return { ...state, cart: [] };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
