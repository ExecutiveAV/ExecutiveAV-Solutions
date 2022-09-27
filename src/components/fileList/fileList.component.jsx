import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import './fileList.styles.scss'

import PrimaryText from './primaryText/primaryText.component';
import FileOptions from '../fileOptions/fileOptions.component';

import {firebaseApp} from '../../utils/firebaseUtils/firebaseUtils';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { updateSchedule } from '../../redux/schedule/schedule.slice';

const db = getFirestore(firebaseApp);

const FileList = ({ type, filesData, kind }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async (invNumber, kind) => {
        try {
            const file = await getDoc(doc(db, kind, invNumber));
            dispatch(updateSchedule(file.data()));
            navigate("/schedules/new")
        } catch (e) {
            console.error(e, invNumber, kind)
        }
        
    }

    const files = filesData.map(file => {
        return (
            <section className='fileList__files__file' >
                <section  className='fileList__files__file__withSubtitle' >
                    <PrimaryText onClick={async e => await handleClick(e, kind)} >{`22${(new Date().getFullYear().toString()).slice(2, 4)}_${file.invNumber}`}</PrimaryText>
                    <PrimaryText primary={false} >{file.company}</PrimaryText>
                </section>
                <PrimaryText >{
                    file.createdOn === null ?
                    "Date not found" :
                    `${new Date(file.createdOn).getMonth()}/${new Date(file.createdOn).getDate()}/${new Date(file.createdOn).getFullYear()}`
                    }</PrimaryText>
                <section className='fileList__files__file__withSubtitle' >
                    <PrimaryText >{
                        file.editedOn === null ?
                        "Date not found" :
                        `${new Date(file.editedOn).getMonth()}/${new Date(file.editedOn).getDate()}/${new Date(file.editedOn).getFullYear()}`
                    }</PrimaryText>
                    {/* <PrimaryText primary={false} >{file.scheduleDocument.editedOn}</PrimaryText> */}
                </section>
                <FileOptions />
            </section>
        );
    });

    return (
        <section className='fileList' >
            <section className='fileList__header' >
                <PrimaryText >{type}:</PrimaryText>
                <PrimaryText >Created On:</PrimaryText>
                <PrimaryText >Edited On:</PrimaryText>
            </section>
            <section className='fileList__files' >
                {files}
            </section>
            
        </section>
    );
};

export default FileList;

//When clicking in schedule, get name and query it to firebase db. then replace current schedule with it and open the createschedule window,
//create parse to transform a schedule into an invoiceObject with standard rates
//create schema for employees and rates with positions