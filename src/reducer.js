import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case DECREASE:
      if (action.payload.amount === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === action.payload.id
              ? { ...item, amount: item.amount - 1 }
              : { ...item };
          }),
        };
      }
    case INCREASE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : { ...item };
        }),
      };
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
