import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';
import Cookies from 'js-cookie';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  Cookies.set('etrade_cart', JSON.stringify(state.cart), { expires: 7 }); // 7 days expiration
  Cookies.set('etrade_wishlist', JSON.stringify(state.wishlist), { expires: 7 });
});

export default store;
