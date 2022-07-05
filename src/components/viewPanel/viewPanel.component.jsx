import React from 'react';
import './viewPanel.styles.scss';

const ViewPanel = ({ children }) => {
    return (
        <section className='viewPanel' >{children}</section>
    );
};

export default ViewPanel;