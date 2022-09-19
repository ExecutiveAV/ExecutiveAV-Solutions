import React from 'react';
import './fileList.styles.scss'

import PrimaryText from './primaryText/primaryText.component';
import FileOptions from '../fileOptions/fileOptions.component';
import { Timestamp } from 'firebase/firestore';

const FileList = ({ type, filesData }) => {
    console.log(filesData);
    const files = filesData.map(file => {
        return (
            <section className='fileList__files__file' >
                <section  className='fileList__files__file__withSubtitle' >
                    <PrimaryText >{`22${(new Date().getFullYear().toString()).slice(2, 4)}_${file.scheduleDocument.invNumber}`}</PrimaryText>
                    <PrimaryText primary={false} >{file.scheduleDocument.company}</PrimaryText>
                </section>
                <PrimaryText >{
                    file.scheduleDocument.createdOn === null ?
                    "Date not found" :
                    new Date((file.scheduleDocument.createdOn).seconds*1000).getMonth()
                    }</PrimaryText>
                <section className='fileList__files__file__withSubtitle' >
                    <PrimaryText >{
                        file.scheduleDocument.editedOn === null ?
                        "Date not found" :
                        new Date((file.scheduleDocument.editedOn).seconds*1000).getMonth()
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