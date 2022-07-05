import React from 'react';
import './App.scss'; 

import SideBar from '../components/sideBar/sideBar.component';

import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <section className='App' >
      <SideBar />
      <Outlet />
    </section>
  );
}

export default App;
