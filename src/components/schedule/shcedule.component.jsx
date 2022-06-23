import React from 'react';
import './schedule.styles.scss';


import Header from './header/header.component';
import Body from './body/body.component';

const Schedule = () => {
    return (
        <section className='scheduleContainer' >
            <Header client="Bluebird" invoiceNumber="2222_69" venue="Hyatt Regency:" venueAddress="69 Ave 420 ST" venueCity="Miami, FL" />
            <Body />
        </section>
    );
};

export default Schedule;