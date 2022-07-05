import React from 'react';
import './primaryText.styles.scss';

const PrimaryText = ({children, primary=true}) => {
    return (
        <p className={`${primary ? "primaryText" : "secondaryText"}`} >
            {children}
        </p>
    );
};

export default PrimaryText;