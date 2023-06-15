import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
};

export const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            state.name = action.payload.name
            state.position = action.payload.possition
            state.phoneNumber = action.payload.phoneNumber
            state.email = action.payload.email
        },
        clearUserData: (state) => {
            state.reduxState = {}
        }
    },
});

export const { addUserData, clearUserData } = cartSlice.actions;

export default cartSlice.reducer;