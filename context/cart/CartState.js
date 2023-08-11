import {useReducer, useMemo} from "react";

import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  CHANGE_CART_QTY,
  CHANGE_CART_SIZE,
} from "../Types";

import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({children}) => {
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({type: ADD_TO_CART, payload: {...item, quantity: 1}});
  };

  const showHideCart = () => {
    dispatch({type: SHOW_HIDE_CART});
  };

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: id});
  };

  const changeQty = (prod) => {
    dispatch({type: CHANGE_CART_QTY, payload: prod});
  };

  const changeSize = (prod) => {
    dispatch({type: CHANGE_CART_SIZE, payload: prod});
  };

  const value = useMemo(() => {
    return {
      showCart: state.showCart,
      cartItems: state.cartItems,
      addToCart,
      showHideCart,
      removeItem,
      changeQty,
      changeSize,
    };
  }, [state.showCart, state.cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartState;
