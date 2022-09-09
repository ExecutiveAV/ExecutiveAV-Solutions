import { configureStore } from '@reduxjs/toolkit';

import scheduleReducer from './schedule/schedule.slice';
import kindReducer from './kind/kind.slice';
import newEntryPortal from './portal/newEntryPortal.slice';

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    kind: kindReducer,
    newEntryPortal: newEntryPortal,
  },
});

export default store;