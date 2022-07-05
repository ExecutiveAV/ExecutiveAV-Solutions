import React from 'react';
import './actionPanel.styles.scss';

const ActionPanel = ({ children }) => {
    return (
        <section className='actionPanel' >{children}</section>
    );
};

export default ActionPanel;