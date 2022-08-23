import { configureStore } from '@reduxjs/toolkit';

import scheduleReducer from './schedule/schedule.slice';
import kindReducer from './kind/kind.slice';

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    kind: kindReducer
  },
});

export default store;