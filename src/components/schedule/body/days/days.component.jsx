import React from 'react';
import './days.component';

import Day from '../day/day.component';

const Days = ( { days } ) => {

    const totalDays = days.map(day => {
        const { dayCounter, date, qty, times } = day;
        return (<Day day={dayCounter} date={date} qty={qty} times={times} />)
    })

    return (
        <section className='days' >
            {
                totalDays
            }
        </section>
    );
};

export default Days;