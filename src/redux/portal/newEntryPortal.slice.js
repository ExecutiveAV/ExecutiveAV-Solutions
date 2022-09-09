import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNewEntryPortalOpen: false,
    newEntryPortalType: "",
};

const newEntryPortalSlice = createSlice({
    name: 'newEntryPortal',
    initialState,
    reducers: {
        updateNewEntryPortalStatus(state, action) {
            state.isNewEntryPortalOpen = action.payload;
        },
        updateNewEntryPortalType(state, action) {
            state.newEntryPortalType = action.payload
        },
    },
});

export const { updateNewEntryPortalStatus, updateNewEntryPortalType } = newEntryPortalSlice.actions;

export default newEntryPortalSlice.reducer;