import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './containers/App';
import Dashboard from './pages/dashboard/dashboard.page';
import Schedules from './pages/schedules/schedules.page';
import CreateSchedules from './pages/createSchedule/createSchedule.pages'

import reportWebVitals from './reportWebVitals';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<App />} >
            <Route index element={<Dashboard />} />
            <Route exact path='schedules' element={<Schedules />} />
            <Route exact path='schedules/new' element={<CreateSchedules />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();