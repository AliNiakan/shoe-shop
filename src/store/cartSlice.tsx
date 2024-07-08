import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Shoe from '../models/Shoe';

interface CartItem extends Shoe {
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [
        {
            id: 1,
            name: 'Blue Shoe',
            colorHex: '#0150a1',
            imageUrl: 'https://i.ibb.co/wSzcd82/blue-black.png',
            size: [41, 42, 43],
            price: 99.99, // Assuming price is added to Shoe type
            quantity: 1
        },
        {
            id: 2,
            name: 'Red Shoe',
            colorHex: '#c30723',
            imageUrl: 'https://i.ibb.co/FhTz5c1/red-black.png',
            size: [40, 41, 42, 43, 44, 45, 46],
            price: 109.99, // Assuming price is added to Shoe type
            quantity: 2
        },
        {
            id: 3,
            name: 'Pink Shoe',
            colorHex: '#bf6f63',
            imageUrl: 'https://i.ibb.co/L9fzStp/pink-white.png',
            size: [41, 42],
            price: 89.99, // Assuming price is added to Shoe type
            quantity: 1
        }
    ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateCartItemQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
