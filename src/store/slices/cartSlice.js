import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const cartData = Cookies.get('etrade_cart');
const parsedCartData = cartData ? JSON.parse(cartData) : null;

const initialState = parsedCartData || {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      const quantityToAdd = newItem.quantity || 1;
      
      state.totalQuantity += quantityToAdd;
      state.totalAmount += Number(newItem.price) * quantityToAdd;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: quantityToAdd,
          totalPrice: Number(newItem.price) * quantityToAdd,
        });
      } else {
        existingItem.quantity += quantityToAdd;
        existingItem.totalPrice = Number(existingItem.totalPrice) + (Number(newItem.price) * quantityToAdd);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      state.totalQuantity--;
      state.totalAmount -= Number(existingItem.price);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
      }
    },
    removeItemCompletely: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= Number(existingItem.totalPrice);
        state.items = state.items.filter(item => item.id !== id);
      }
    }
  },
});

export const { addToCart, removeFromCart, removeItemCompletely } = cartSlice.actions;
export default cartSlice.reducer;
