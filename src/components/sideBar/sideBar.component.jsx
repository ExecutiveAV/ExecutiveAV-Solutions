import React from 'react';
import './sideBar.styles.scss';

import UserIcon from './userIcon/userIcon.component';

const SideBar = () => {
    return (
        <section className='sideBar' >
            <UserIcon />
        </section>
    );
};

export default SideBar;