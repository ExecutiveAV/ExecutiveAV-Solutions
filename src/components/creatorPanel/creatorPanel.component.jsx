import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './creatorPanel.styles.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import previous from '../../dummyDB/previous';

import { Carousel } from 'react-responsive-carousel';

import CreatorCard from './creatorCard/creatorCard.component';
import CreatorInput from './creatorInput/creatorInput.component';
import MainButton from '../mainButton/mainButton.component';

import { updateSchedule, updateCurrentSchedule, updateCurrentShift, updateWorkingDay, updateWorkingShift } from '../../redux/schedule/schedule.slice';
import { updateKind } from '../../redux/kind/kind.slice';

const CreatorPanel = () => {

    const { kind } = useSelector(state => state.kind);
    const { scheduleDocument, current } = useSelector(state => state.schedule)
    const { invNumber, company, location, daysData } = scheduleDocument;
    const [client, setClient] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState(0);
    const [venue, setVenue] = useState("");
    const [days, setDays] = useState(0);

    const dispatch = useDispatch();

    const scheduleGenerator = (company, invNumber, location, daysData) => ({
        invNumber,
        company,
        location,
        daysData
    });

    const dayGenerator = () => ({
        date: "",
        shifts: [],
    });

    const shiftGenerator = () => ({
        timeIn: "",
        timeOut: "",
        guys: [],
    });

    const guysGenerator = () => ({
        name: "",
        position: "",
        walkaway: false
    });

    const goToDays = () => {
        const daysData = [];
        for (let i = 0; i < days; i++) {
            let temp = dayGenerator();
            temp.shifts.push(shiftGenerator());
            daysData.push(temp);
        }
        const schedule = scheduleGenerator(client, invoiceNumber, venue, daysData);
        dispatch(updateSchedule(schedule));
        dispatch(updateKind("days"));
    };

    const goBack = () => {
        dispatch(updateKind("backToInitialQuestion"));
    };

    const goToShift = (day, amountOfShifts) => {
        dispatch(updateKind("shifts"));
    };
    
    const updateShiftPeople = (amountOfPeople) => {
        let temp = JSON.parse(JSON.stringify(scheduleDocument));
        let shift = shiftGenerator();
        for (let i = 0; i < amountOfPeople; i++) {
            shift.guys.push(guysGenerator());
        }
        temp.daysData[0].shifts[0] = shift;
        console.log(temp);
        dispatch(updateSchedule(temp))
    }

    const InitialQuestion = () => {
        return (
            <CreatorCard>
                <CreatorInput type="options" label="Which Company is it for?" options={previous.clients} action={setClient} />
                <CreatorInput type="number" label={`Invoice #`} lowest={previous.invoiceNumber.option + 1} action={setInvoiceNumber} />
                <CreatorInput type="options" label="What Venue?" options={previous.venue} action={setVenue} />
                <CreatorInput type="number" label="How Many Days?" lowest={1} action={setDays} />
                <section className="creatorPanel__initialQuestionButton" >
                    <MainButton content="Next" action={goToDays} />
                </section>
            </CreatorCard>
        )
    };

    const BackToInitialQuestion = (company, inv, venue, days) => {
        
        return (
            <CreatorCard>
                <CreatorInput type="options" label="Which Company is it for?" options={previous.clients} selected={company} action={setClient} />
                <CreatorInput type="number" label={`Invoice #`} lowest={previous.invoiceNumber.option + 1} selected={inv} action={setInvoiceNumber} />
                <CreatorInput type="options" label="What Venue?" options={previous.venue} selected={venue} action={setVenue} />
                <CreatorInput type="number" label="How Many Days?" lowest={1} selected={days} action={setDays} />
                <section className="creatorPanel__initialQuestionButton" >
                    <MainButton content="Next" action={goToDays} />
                </section>
            </CreatorCard>
        );
    };


    const DayQuestion = (day) => {
        return (
            <CreatorCard >
                <CreatorInput type="date" label={`What date is it for Day ${day}`} />
                <CreatorInput selected={1} type="number" label={`How many people for shift ${current.shift}?`} lowest={1} action={updateShiftPeople} />
                <CreatorInput type="toggle" label="Add extra shift?" />
                <section className="creatorPanel__initialQuestionButton" >
                    <MainButton content="Back" action={() => goBack()} />
                    <MainButton content="Next" action={() => goToShift((day - 1), current.shift)} />
                </section>
            </CreatorCard>
        );
    }

    const ShiftQuestion = () => {
        return (
            <CreatorCard >
                <CreatorInput type="time" label="Time in:" />
                <CreatorInput type="time" label="Time Out:" />
                <section className="creatorPanel__initialQuestionButton" >
                    <MainButton content="Back" action={() => goBack()} />
                    <MainButton content="Next" action={(e) => dispatch(updateCurrentShift(e))} />
                </section>
            </CreatorCard>
        );
    }

    const employeeQuestion = call => {

        return (
            <CreatorCard >
                <CreatorInput type="options" label={`Whos the ${call} employee you want working that day?`} subLabel={`For ${call}`} />
                <CreatorInput type="options" label="What Position?" />
                <CreatorInput type="time" label="Time?" />
                <CreatorInput type="slider" label="Walkaway?" />
            </CreatorCard>
        )
    };

    return (
        
        <section className='creatorPanel' >
            {
                kind === "initialQuestion" ? InitialQuestion() :
                kind === "days" ? DayQuestion(current.day) :
                kind === "backToInitialQuestion" ? BackToInitialQuestion(company, invNumber, location, daysData.length) :
                kind === "shifts" ? ShiftQuestion() :
                ""
            }
        </section>
    );
};

export default CreatorPanel;