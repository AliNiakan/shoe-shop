import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Shoe from '../models/Shoe';

interface ShoeState {
  shoes: Shoe[];
  selectedShoeId: number | null;
}

const initialState: ShoeState = {
  shoes: [
    { id: 1, name: 'Blue Shoe', colorHex: '#0150a1', imageUrl: 'https://i.ibb.co/wSzcd82/blue-black.png', size: [41, 42, 43] },
    { id: 2, name: 'Red Shoe', colorHex: '#c30723', imageUrl: 'https://i.ibb.co/FhTz5c1/red-black.png', size: [40, 41, 42, 43, 44, 45, 46] },
    { id: 3, name: 'Pink Shoe', colorHex: '#bf6f63', imageUrl: 'https://i.ibb.co/L9fzStp/pink-white.png', size: [41,42] },
    { id: 4, name: 'Yellow Shoe', colorHex: '#d89c02', imageUrl: 'https://i.ibb.co/NCc0rwq/yellow-black.png', size: [41, 44, 47] },
  ],
  //Default value
  selectedShoeId: 1,
};

const shoeSlice = createSlice({
  name: 'shoe',
  initialState,
  reducers: {
    selectShoe: (state, action: PayloadAction<number>) => {
      state.selectedShoeId = action.payload;
    },
  },
});

export const { selectShoe } = shoeSlice.actions;

export default shoeSlice.reducer;