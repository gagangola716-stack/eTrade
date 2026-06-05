import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const wishlistData = Cookies.get('etrade_wishlist');
const parsedWishlistData = wishlistData ? JSON.parse(wishlistData) : null;

const initialState = parsedWishlistData || {
  items: [],
  totalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
        state.totalQuantity++;
      } else {
        state.items = state.items.filter(item => item.id !== newItem.id);
        state.totalQuantity--;
      }
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if(existingItem) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity--;
      }
    }
  },
});

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
