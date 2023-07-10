import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    social: [],
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
        addSocialData: (state, action) => {
            state.web = action.payload.web
            state.fb = action.payload.fb
            state.tw = action.payload.tw
            state.ld = action.payload.ld
            state.insta = action.payload.insta
        },
        clearUserData: (state) => {
            return initialState;
        }
    }
});

export const { addUserData, clearUserData, addSocialData } = cartSlice.actions;

export default cartSlice.reducer;