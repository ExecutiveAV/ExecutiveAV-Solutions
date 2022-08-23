import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scheduleDocument: {},
    current: {
        day: 1,
        shift: 1,
    },
    workingDay: {date: "", shifts: [],},
    workingShift: {timeIn: "", timeOut: "", guys: [],},
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
        updateCurrentShift(state, action) {
            state.current.shift = action.payload
        },
        updateWorkingDay(state, action) {
            state.workingDay = action.payload
        },
        updateWorkingShift(state, action) {
            state.workingShift = action.payload
        },
    }
});

export const { updateSchedule, updateCurrentDay, updateCurrentShift, updateWorkingDay, updateWorkingShift } = scheduleSlice.actions;

export default scheduleSlice.reducer;