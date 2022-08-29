import React from 'react';
import { useSelector } from 'react-redux';
import './schedulePreview.styles.scss';

import previous from '../../dummyDB/previous';

import Header from './header/header.component';
import Body from './body/body.component';

const SchedulePreview = () => {

    const { scheduleDocument } = useSelector(state => state.schedule);
    let address = "";
    let city = "";

    previous.venue.forEach(venue => {
        if (venue.name === scheduleDocument.location) {
            address = venue.street;
            city = venue.city;
        }
    });

    return (
        <section className='schedulePreviewContainer' >
            <Header client={scheduleDocument.company} invoiceNumber={scheduleDocument.invNumber} venue={scheduleDocument.location} venueAddress={address} venueCity={city} />
            <Body schedule={scheduleDocument.daysData} />
        </section>
    );
};

export default SchedulePreview;