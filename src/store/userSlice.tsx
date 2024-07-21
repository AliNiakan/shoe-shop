import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../models/User';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: {
        id: 1,
        first_name: 'Ali',
        last_name: 'Niakan',
        email: 'AliNiakan@example.com',
        password: '12345678', 
        addresses: ['Shiraz, Koche 1','Shiraz, Koche 2'],
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        updateUser(state, action: PayloadAction<Partial<User>>) {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
        clearUser(state) {
            state.user = null;
        }
    }
});

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
