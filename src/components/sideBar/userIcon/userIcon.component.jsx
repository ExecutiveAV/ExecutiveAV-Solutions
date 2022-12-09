import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './userIcon.styles.scss';

import { updateLoginPortalStatus } from '../../../redux/portal/signinPortal';


import Login from '../../login/login.component';

const UserIcon = () => {
    let userInitials = "AB";

    const { isOpen } = useSelector(state => state.loggin);

    const dispatch = useDispatch();

    return (
        <section className='userIcon' >
            <p className='userIcon__initials' onClick={e => dispatch(updateLoginPortalStatus(!isOpen))} >{userInitials}</p>

            {
                isOpen ? <Login ></Login> : ""
            }
        </section>
    );
};

export default UserIcon;