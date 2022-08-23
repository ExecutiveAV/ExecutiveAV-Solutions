import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    kind: "initialQuestion",
};

const kindSlice = createSlice({
    name: 'kind',
    initialState,
    reducers: {
        updateKind(state, action) {
            state.kind = action.payload;
        }
    },
});

export const { updateKind } = kindSlice.actions;

export default kindSlice.reducer;