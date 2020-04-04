export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

// action creators

export const removeItem = (id) => ({ type: REMOVE, payload: { id } });
export const clearCart = () => ({ type: CLEAR_CART });
export const getTotals = () => ({ type: GET_TOTALS });
