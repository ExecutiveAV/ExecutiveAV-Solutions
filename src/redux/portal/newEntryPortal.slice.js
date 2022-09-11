import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNewEntryPortalOpen: false,
    newEntryPortalType: "",
    newEntryDocument: {},
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
        updateNewEntryDocument(state, action) {
            state.newEntryDocument[action.payload.type] = action.payload.value
        },
        clearNewEntryDocument(state, action) {
            state.newEntryDocument = action.payload
        },
    },
});

export const { updateNewEntryPortalStatus, updateNewEntryPortalType, updateNewEntryDocument, clearNewEntryDocument } = newEntryPortalSlice.actions;

export default newEntryPortalSlice.reducer;