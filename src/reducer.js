import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    // not used //
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
    /////////////////

    case CLEAR_CART:
      return { ...state, cart: [] };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? action.payload.toggle === 'inc'
              ? { ...item, amount: item.amount + 1 }
              : { ...item, amount: item.amount - 1 }
            : { ...item };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
