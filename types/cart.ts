export interface CartItemType {
  _id: number;
  name: string;
  price: number;
  size: string;
  qty: number;
}

export interface CartContextType {
  showCart: boolean;
  cartItems: CartItemType[];
  showHideCart: () => void;
}
