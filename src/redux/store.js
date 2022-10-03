import { configureStore } from '@reduxjs/toolkit';

import scheduleReducer from './schedule/schedule.slice';
import kindReducer from './kind/kind.slice';
import newEntryPortal from './portal/newEntryPortal.slice';
import invoiceReducer from './invoice/invoice.slice';

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    kind: kindReducer,
    newEntryPortal: newEntryPortal,
    invoice: invoiceReducer
  },
});

export default store;