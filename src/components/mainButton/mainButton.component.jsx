import React from 'react';
import './mainButton.styles.scss'

import { Link } from 'react-router-dom';

const MainButton = ({ content, pathTo, action }) => {
    return (
        <section className='mainButton' >
            {pathTo ? <Link to={pathTo} className='mainButton__content' >{content}</Link> : <p to={pathTo} className='mainButton__content' onClick={action} >{content}</p>}
        </section>
    );
};

export default MainButton;