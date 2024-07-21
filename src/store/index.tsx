import { configureStore } from '@reduxjs/toolkit';
import shoeReducer from './shoeSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    shoe: shoeReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
