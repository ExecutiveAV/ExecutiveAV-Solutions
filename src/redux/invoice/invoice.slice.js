import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoiceDocument: {
        invNumber: "",
        company: "",
        location: "",
        daysData: [],
        createdOn: null,
        editedOn: null,
        issuedDate: ""
    },
    current: {
        day: 1,
        shift: 1,
        employee: 1,
        date: "",
    },
};

const invoiceSlice = createSlice({
    name: 'invoiceDocument',
    initialState,
    reducers: {
        updateInvoice(state, action) {
            state.invoiceDocument = action.payload;
        },
        // updateCurrentDay(state, action) {
        //     state.current.day = action.payload
        // },
        // updateCurrentDate(state, action) {
        //     state.current.date = action.payload
        // },
        // updateCurrentShift(state, action) {
        //     state.current.shift = action.payload
        // },
        // updateCurrentEmployee(state, action) {
        //     state.current.employee = action.payload
        // },
        // updateCreatedOn(state, action) {
        //     state.scheduleDocument.createdOn = action.payload
        // },
        // updateEditedOn(state, action) {
        //     state.scheduleDocument.editedOn = action.payload
        // }
    }
});

export const { updateInvoice } = invoiceSlice.actions;
//export const { updateCurrentDay, updateCurrentShift, updateCurrentDate, updateCurrentEmployee, updateCreatedOn, updateEditedOn } = invoiceSlice.actions

export default invoiceSlice.reducer;