import React, { useEffect, useState } from 'react';
import './invoicePreviewBody.styles.scss';

const InvoicePreviewBody = ({ invoice }) => {

    const [guys, setguys] = useState([]);
    const buildDays = (daysData) => {
        let temp = {};
        daysData.forEach(day => {
            day.shifts.forEach(shift => {
                shift.guys.forEach(guy => {
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
                        hrs: parseInt(guy.timeOut.slice(0, 2)) - parseInt(guy.timeIn.slice(0, 2)),
                        walkaway: guy.walkaway,
                        rate: 30,
                        ot: parseInt(guy.timeOut.slice(0, 2)) - parseInt(guy.timeIn.slice(0, 2)) - (parseInt(guy.timeOut.slice(0, 2)) - parseInt(guy.timeIn.slice(0, 2)) === 10 ? 10 : 5),
                        name: guy.name
                    };
                    temp[guy.name]["days"].push(info);
                });
            });
        });
        return temp;
    }

    const renderDays = days => {
        const result = [];
        let total = 0;
        for (let i = 0; i < days.length; i++) {
            result.push((
                <>
                    <section className='invoicePreviewBody__day' >
                        <section className='invoicePreviewBody__day__item ' >{new Date(days[i].date).toLocaleDateString()}</section>
                        <section className='invoicePreviewBody__day__item ' >{`${days[i].timeIn} - ${days[i].timeOut}`}</section>
                        <section className='invoicePreviewBody__day__item ' >{days[i].position}</section>
                        <section className='invoicePreviewBody__day__item ' >{days[i].hrs}</section>
                        <section className='invoicePreviewBody__day__item ' >{days[i].rate}</section>
                        <section className='invoicePreviewBody__day__item ' >{days[i].ot}</section>
                        <section className='invoicePreviewBody__day__item ' >{`${days[i].hrs * days[i].rate}`}</section>
                    </section>
                </>
            ))
            total+=days[i].hrs * days[i].rate;
        }
        return [result, total];
    };

    const renderTechs = (techs) => {
        const keys = Object.keys(techs);
        let temp = [];
        keys.forEach(tech => {
            let data = renderDays(techs[tech].days);
            temp.push(
                (<section>
                    <section>{tech}</section>
                    <section>
                        <section>
                            <span>Date</span>
                            <span>Position</span>
                            <span>Time</span>
                            <span>Rate</span>
                            <span>Hrs</span>
                            <span>OT</span>
                            <span>Total</span>
                        </section>
                        <section className='daysHolder' >{data[0]}</section>
                        <section>{data[1]}</section>
                    </section>
                </section>)
            )
        });
        return temp;
    };

    useEffect(() => {
        setguys(buildDays(invoice))
    }, [])

    return (
        <section className='invoicePreviewBody' >
        {
            renderTechs(guys)
        }
        </section>
    );
};

export default InvoicePreviewBody;