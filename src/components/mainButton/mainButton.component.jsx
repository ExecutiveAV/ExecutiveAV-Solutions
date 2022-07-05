import React from 'react';
import './mainButton.styles.scss'

import { Link } from 'react-router-dom';

const MainButton = ({ content, pathTo }) => {
    return (
        <section className='mainButton' >
            <Link to={pathTo} className='mainButton__content' >{content}</Link>
        </section>
    );
};

export default MainButton;