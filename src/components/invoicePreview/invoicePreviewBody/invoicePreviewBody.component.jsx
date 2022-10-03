import React, { useState } from 'react';

const InvoicePreviewBody = ({ invoice }) => {

    const [guys, setguys] = useState([]);
    const buildDays = (daysData) => {
        let temp = {};
        daysData.forEach(day => {
            day.shifts.forEach(shift => {
                shift.guys.forEach(guy => {
                    console.log(guy);
                    if (temp[guy.name] === undefined) {
                        temp[guy.name] = {
                            days: []
                        };
                    };
                    let info = {
                        date: day.date,
                        timeIn: guy.timeIn,
                        timeOut: guy.timeOut,
                        position: guy.position,
                        hrs: (guy.timeOut - guy.timeIn),
                        walkaway: guy.walkaway,
                        rate: 30,
                        ot: (guy.timeOut - guy.timeIn) - 10,
                        name: guy.name
                    };
                    temp[guy.name]["days"].push(info);
                });
            });
        });
        return temp;
    }

    console.log(buildDays(invoice));

    const renderDays = days => {

    }

    return (
        <section className='body' >
        </section>
    );
};

export default InvoicePreviewBody;