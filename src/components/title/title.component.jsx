import React from 'react';
import './title.styles.scss';

import { Link } from 'react-router-dom';

const Title = ({ title, path }) => {
    return (
        <Link to={path} className='title' >{title}</Link>
    );
};

export default Title;