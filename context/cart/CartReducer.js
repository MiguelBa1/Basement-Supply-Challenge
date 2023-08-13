import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  CHANGE_CART_QTY,
  CHANGE_CART_SIZE,
  LOAD_CART_FROM_STORAGE,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, {...action.payload, qty: 1, size: "M"}],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      };
    }
    case CHANGE_CART_QTY: {
      return {
        ...state,
        cartItems: state.cartItems.filter((c) =>
          c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty,
        ),
      };
    }
    case CHANGE_CART_SIZE: {
      return {
        ...state,
        cartItems: state.cartItems.filter((c) =>
          c._id === action.payload._id ? (c.size = action.payload.size) : c.size,
        ),
      };
    }
    case LOAD_CART_FROM_STORAGE: {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
