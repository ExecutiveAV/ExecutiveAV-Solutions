import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scheduleDocument: {
        invNumber: "",
        company: "",
        location: "",
        daysData: [],
    },
    current: {
        day: 1,
        shift: 1,
        employee: 1,
        date: "",
    },
};

const scheduleSlice = createSlice({
    name: 'scheduleDocument',
    initialState,
    reducers: {
        updateSchedule(state, action) {
            state.scheduleDocument = action.payload;
        },
        updateCurrentDay(state, action) {
            state.current.day = action.payload
        },
        updateCurrentDate(state, action) {
            state.current.date = action.payload
        },
        updateCurrentShift(state, action) {
            state.current.shift = action.payload
        },
        updateCurrentEmployee(state, action) {
            state.current.employee = action.payload
        },
    }
});

export const { updateSchedule, updateCurrentDay, updateCurrentShift, updateCurrentDate, updateCurrentEmployee } = scheduleSlice.actions;

export default scheduleSlice.reducer;