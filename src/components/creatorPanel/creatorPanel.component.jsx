import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './creatorPanel.styles.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import previous from '../../dummyDB/previous';

import { Carousel } from 'react-responsive-carousel';

import CreatorCard from './creatorCard/creatorCard.component';
import CreatorInput from './creatorInput/creatorInput.component';
import MainButton from '../mainButton/mainButton.component';

import { updateSchedule, updateCurrentSchedule, updateCurrentShift, updateCurrentDay, updateCurrentDate, updateCurrentEmployee } from '../../redux/schedule/schedule.slice';
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
        walkaway: true,
        timeIn: "",
        timeOut: "",
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
        temp.daysData[current.day -1].shifts[current.shift -1] = shift;
        dispatch(updateSchedule(temp));
    };

    const updateDate = newDate => {
        let temp = JSON.parse(JSON.stringify(scheduleDocument));
        temp.daysData[current.day - 1].date = newDate;
        dispatch(updateSchedule(temp));
        dispatch(updateCurrentDate(newDate));
    };

    const updateEmployeeName = name => {
        let temp = JSON.parse(JSON.stringify(scheduleDocument));
        temp.daysData[current.day - 1].shifts[current.shift - 1].guys[current.employee - 1].name = name;
        dispatch(updateSchedule(temp));
    };

    const updateEmployeePosition = position => {
        let temp = JSON.parse(JSON.stringify(scheduleDocument));
        temp.daysData[current.day - 1].shifts[current.shift - 1].guys[current.employee - 1].position = position;
        dispatch(updateSchedule(temp));
    };

    const updateEmployeeWalkaway = walkaway => {
        let temp = JSON.parse(JSON.stringify(scheduleDocument));
        temp.daysData[current.day - 1].shifts[current.shift - 1].guys[current.employee - 1].walkaway = walkaway;
        dispatch(updateSchedule(temp));
    };

    const updateEmployeeInTime = time => {
        let temp = JSON.parse(JSON.stringify(scheduleDocument));
        temp.daysData[current.day - 1].shifts[current.shift - 1].guys[current.employee - 1].timeIn = time;
        dispatch(updateSchedule(temp));
    };

    const updateEmployeeOutTime = time => {
        let temp = JSON.parse(JSON.stringify(scheduleDocument));
        temp.daysData[current.day - 1].shifts[current.shift - 1].guys[current.employee - 1].timeOut = time;
        dispatch(updateSchedule(temp));
    }

    const goToNextEmployee = () => {
        if (current.employee === scheduleDocument.daysData[current.day - 1].shifts[current.shift - 1].guys.length && current.shift !== scheduleDocument.daysData[current.day - 1].shifts.length) {
            dispatch(updateCurrentEmployee(1));
            dispatch(updateCurrentShift(current.shift + 1));
            dispatch(updateKind("days"))
        } else if (current.employee === scheduleDocument.daysData[current.day - 1].shifts[current.shift - 1].guys.length && current.shift === scheduleDocument.daysData[current.day - 1].shifts.length) {
            dispatch(updateCurrentEmployee(1));
            dispatch(updateCurrentShift(1));
            dispatch(updateCurrentDay(current.day + 1))
            dispatch(updateKind("days"))
        } else {
            dispatch(updateCurrentEmployee(current.employee + 1));
        }
    }

    const addShift = (toggleValue) => {
        if (toggleValue) {
            let temp = JSON.parse(JSON.stringify(scheduleDocument));
            temp.daysData[current.day -1].shifts.push(shiftGenerator());
            dispatch(updateSchedule(temp));
        } else if (!toggleValue) {
            let temp = JSON.parse(JSON.stringify(scheduleDocument));
            temp.daysData[current.day -1].shifts.pop();
            dispatch(updateSchedule(temp));
        }
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


    const DayQuestion = () => {
        return (
            <CreatorCard >
            {
                current.shift === 1 ?
                <CreatorInput type="date" label={`What date is it for Day ${current.day}`} action={updateDate} /> :
                ""
            }
                
                <CreatorInput selected={1} type="number" label={`How many people for shift ${current.shift}?`} lowest={1} action={updateShiftPeople} />
                <CreatorInput type="toggle" label="Add extra shift?" action={addShift} />
                <section className="creatorPanel__initialQuestionButton" >
                    <MainButton content="Back" action={() => goBack()} />
                    <MainButton content="Next" action={() => goToShift((current.day - 1), current.shift)} />
                </section>
            </CreatorCard>
        );
    }

    const EmployeeQuestion = () => {

        return (
            <CreatorCard >
                <CreatorInput type="options" label={`Employee ${current.employee} for shift ${current.shift}?`} subLabel={`For ${current.date}`} options={previous.employees} action={updateEmployeeName} />
                <CreatorInput type="options" label="What Position?" options={previous.positions} action={updateEmployeePosition} />
                <CreatorInput type="in&out" label="Time?" subLabel={["In:", "Out:"]} action={[updateEmployeeInTime, updateEmployeeOutTime]} />
                <CreatorInput type="toggle" label="Walkaway?" selected={true} action={updateEmployeeWalkaway} />
                <section className="creatorPanel__initialQuestionButton" >
                    <MainButton content="Back" action={() => goBack()} />
                    <MainButton content="Next" action={goToNextEmployee} />
                </section>
            </CreatorCard>
        )
    };

    return (
        
        <section className='creatorPanel' >
            {
                kind === "initialQuestion" ? InitialQuestion() :
                kind === "days" ? DayQuestion(current.day) :
                kind === "backToInitialQuestion" ? BackToInitialQuestion(company, invNumber, location, daysData.length) :
                kind === "shifts" ? EmployeeQuestion() :
                ""
            }
        </section>
    );
};

export default CreatorPanel;