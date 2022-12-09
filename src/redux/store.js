import { configureStore } from '@reduxjs/toolkit';

import scheduleReducer from './schedule/schedule.slice';
import kindReducer from './kind/kind.slice';
import newEntryPortal from './portal/newEntryPortal.slice';
import invoiceReducer from './invoice/invoice.slice';
import loginReducer from './portal/signinPortal';
import activeUserReducer from './activeUser/activeUser';

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    kind: kindReducer,
    newEntryPortal: newEntryPortal,
    loggin: loginReducer,
    invoice: invoiceReducer,
    activeUser: activeUserReducer
  },
});

export default store;