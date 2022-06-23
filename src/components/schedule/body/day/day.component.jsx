import React from 'react';

import './day.styles.scss';

import Category from './category/category.component';

const Day = ( { day, date, times } ) => {

    const days = <section className='schedule' >{day}</section>;

    const dates = <section className='schedule' >{date}</section>;

    const qty = times.map(time => {
        const qty = time.techs.length;
        return (<section className='schedule' >{qty}</section>);
    });

    const positions = times.map(time => {
        const position = time.techs.map(tech => {
            console.log();
            return (<section >{tech.position}</section>)
        })
        return (<section className='schedule' >{position}</section>);
    });

    const names = times.map(time => {
        const name = time.techs.map(tech => {
            return (<section >{tech.name}</section>)
        })
        return (<section className='schedule' >{name}</section>);
    });
    const timez = times.map(time => {
        const timesz = time.techs.map(tech => {
            return (<section >{time.time}</section>)
        });;
        return (<section className='schedule' >{timesz}</section>);
    });
    const hours = times.map(time => {
        const hours = time.techs.map(tech => {
            return (<section >{tech.hrs}</section>)
        })
        return (<section className='schedule' >{hours}</section>);
    });

    return (
        <section className='day' >
            <section className='day__info' >
                <Category size="day" >{days}</Category>
                <Category size="date" >{dates}</Category>
                <Category size="qty" >{qty}</Category>
                <Category size="position" >{positions}</Category>
                <Category size="tech" >{names}</Category>
                <Category size="time" >{timez}</Category>
                <Category size="hrs" >{hours}</Category>
            </section>
        </section>
    );
};

export default Day;