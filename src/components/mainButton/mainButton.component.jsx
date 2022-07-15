import React from 'react';
import './mainButton.styles.scss'

import { Link } from 'react-router-dom';

const MainButton = ({ content, pathTo }) => {
    return (
        <section className='mainButton' >
            {pathTo ? <Link to={pathTo} className='mainButton__content' >{content}</Link> : <p to={pathTo} className='mainButton__content' >{content}</p>}
        </section>
    );
};

export default MainButton;