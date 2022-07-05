import React from 'react';
import './sideBar.styles.scss';

import UserIcon from './userIcon/userIcon.component';

const SideBar = () => {
    return (
        <section className='sideBar' >
            <UserIcon userInitials={"AB"} />
        </section>
    );
};

export default SideBar;