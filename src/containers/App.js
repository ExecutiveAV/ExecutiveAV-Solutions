import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.scss'; 

import SideBar from '../components/sideBar/sideBar.component';

import { Outlet } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from '../utils/firebaseUtils/firebaseUtils';

import { updateLoggedinStatus } from '../redux/portal/signinPortal';
import { updateFirstName, updateLastName, updateEmail, updatePhoneNumber, updateUid } from '../redux/activeUser/activeUser';

function App() {
  
  const auth = getAuth(firebaseApp);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
    if (user) {
        const uid = user.uid;
        dispatch(updateUid(uid));
        dispatch(updateLoggedinStatus(true));
        const name = user.displayName === null ? "Update your name" : user.displayName.split(" ");
        if (user.displayName !== null) {
          dispatch(updateFirstName(name[0]));
          dispatch(updateLastName(name[1]));
        }
        const number = user.phoneNumber === null ? "update your phone number" : user.phoneNumber;
        dispatch(updatePhoneNumber(number));
        dispatch(updateEmail(`${user.email}`));
      } else {
        dispatch(updateLoggedinStatus(false))
      }
    })
  }, [])

  return (
    <section className='App' >
      <SideBar />
      <Outlet />
    </section>
  );
}

export default App;
