import React from 'react';

import './day.styles.scss';

import Category from './category/category.component';

const Day = ( { day, date, times } ) => {

    const days = <section className='schedule' >{day}</section>;

    const dates = <section className='schedule' >{date}</section>;

    const groups = times.map(time => {
        const qty = (<section className='schedule__item' >{time.techs.length}</section>);
        const positions = time.techs.map(tech => (<section className='schedule__item' >{tech.position}</section>));
        const techs = time.techs.map(tech => (<section className='schedule__item' >{tech.name}</section>));
        const timez = time.techs.map(tech => (<section className='schedule__item' >{time.time}</section>));
        const hours = time.techs.map(tech => (<section className='schedule__item' >{tech.hrs}</section>));
        return (
            <section className='groups' >
                <Category size={"qty"} >{qty}</Category>
                <Category size={"position"} >{positions}</Category>
                <Category size="tech" >{techs}</Category>
                <Category size="time" >{timez}</Category>
                <Category size="hrs" >{hours}</Category>
            </section>
        )
    })

    return (
        <section className='day' >
            <section className='day__info' >
                <Category size="day" >{days}</Category>
                <Category size="date" >{dates}</Category>
                <Category size="all" >{groups}</Category>
            </section>
        </section>
    );
};

export default Day;