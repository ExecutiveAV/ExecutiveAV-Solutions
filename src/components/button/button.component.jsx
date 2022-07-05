import React from 'react';
import './button.styles.scss';

const Button = ({ children, customStyle }) => {
    return (
        <section className='button' >
            <section className={customStyle} >{children}</section>
        </section>
    );
};

export default Button;