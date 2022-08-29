import React from 'react';
import './days.styles.scss';

import Day from '../day/day.component';
import checkIfUndefined from '../../../../utils/checkUndefined';

const Days = ( { days } ) => {

    // const totalDays = days.map(day => {
    //     const { dayCounter, date, qty, times } = day;
    //     return (<Day day={dayCounter} date={date} qty={qty} times={times} />)
    // })

    let totalDays = [];

    const creator = (dates) => {
        for (let i = 0; i < dates.length; i++) {
            totalDays.push(<Day day={i + 1} date={dates[i].date} shifts={dates[i].shifts} />)
        }
    }

    checkIfUndefined(days, creator);

    return (
        <section className='days' >
            {
                totalDays
            }
        </section>
    );
};

export default Days;