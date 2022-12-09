import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    uid: "",
};

const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        updateFirstName(state, action) {
            state.firstName = action.payload;
        },
        updateLastName(state, action) {
            state.lastName = action.payload
        },
        updateEmail(state, action) {
            state.email = action.payload
        },
        updatePhoneNumber(state, action) {
            state.phoneNumber = action.payload
        },
        updateUid(state, action) {
            state.uid = action.payload
        },
        clearActiveUser(state) {
            state = initialState
        },
    },
});

export const { updateFirstName, updateLastName, updateEmail, updatePhoneNumber, updateUid, clearActiveUser } = activeUserSlice.actions;

export default activeUserSlice.reducer;