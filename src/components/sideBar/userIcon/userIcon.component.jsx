import React from 'react';
import './userIcon.styles.scss';

const UserIcon = ({ userInitials }) => {
    return (
        <section className='userIcon' >
            <p className='userIcon__initials' >{userInitials}</p>
        </section>
    );
};

export default UserIcon;