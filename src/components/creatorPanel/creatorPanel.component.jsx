import React, { useState } from 'react';
import './creatorPanel.styles.scss';

import previous from '../../dummyDB/previous';

import CreatorCard from './creatorCard/creatorCard.component';
import CreatorInput from './creatorInput/creatorInput.component';
import MainButton from '../mainButton/mainButton.component';

const CreatorPanel = () => {

    const [kind, setKind] = useState("initialQuestion")

    const schedule = {
        scheduleNumber: "",
        client: "",
        venue: "",
        days: 0,
        daysData: [
            
        ],
    }

    const day = {
        date: "",
        guys: 0,
        times: [],
        timeData: [],
    }

    const time = {
        time: "",
        name: "",
        position: "",
        hrs: "",
        walkaway: false
    }

    const InitialQuestion = () => {
        return (
            <CreatorCard>
                <CreatorInput type="options" label="Which Company is it for?" options={previous.clients} />
                <CreatorInput type="options" label="Invoice #" options={previous.invoiceNumber} />
                <CreatorInput type="options" label="What Venue?" options={previous.venue} />
                <CreatorInput type="number" label="How Many Days?" />
                <section className="creatorPanel__initialQuestionButton" >
                    <MainButton content="Next" />
                </section>
            </CreatorCard>)
    }

    const DayQuestion = call => {

        return (
            <CreatorCard >
                <CreatorInput label={`What date is is for Day ${call.day}`} options="calendar" />
                <CreatorInput label="How manny people" options={null} />
            </CreatorCard>
        )
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
    }

    const index = [InitialQuestion()]

    return (
        <section className='creatorPanel' >
            {
                kind === "initialQuestion" ? InitialQuestion("") : ""
            }
        </section>
    );
};

export default CreatorPanel;