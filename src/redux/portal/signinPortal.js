import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isLoggedIn: false,
    type: "signin",
    userEmail: "",
    userPassword: "",
    userPasswordCheck: "",
    userFirstName: "",
    userLastName: "",
    userPhoneNumber: "",
};

const loginPortalSlice = createSlice({
    name: 'loginPortal',
    initialState,
    reducers: {
        updateLoginPortalStatus(state, action) {
            state.isOpen = action.payload;
        },
        updateLoggedinStatus(state, action) {
            state.isLoggedIn = action.payload
        },
        updateUserEmail(state, action) {
            state.userEmail = action.payload
        },
        updateUserPassword(state, action) {
            state.userPassword = action.payload
        },
        updateUserPasswordCheck(state, action) {
            state.userPasswordCheck = action.payload
        },
        updateUserFirstName(state, action) {
            state.userFirstName = action.payload
        },
        updateUserLastName(state, action) {
            state.userLastName = action.payload
        },
        updateUserPhoneNumber(state, action) {
            state.userPhoneNumber = action.payload
        },
        updateType(state, action) {
            state.type = action.payload
        }
    },
});

export const { updateLoginPortalStatus, updateLoggedinStatus, updateUserEmail, updateUserPassword, updateUserPasswordCheck, updateUserFirstName, updateUserLastName, updateUserPhoneNumber, updateType } = loginPortalSlice.actions;

export default loginPortalSlice.reducer;