import React from 'react';
import './fileList.styles.scss'

import PrimaryText from './primaryText/primaryText.component';
import FileOptions from '../fileOptions/fileOptions.component';

const FileList = ({ type, filesData }) => {
    const files = filesData.map(file => {
        return (
            <section className='fileList__files__file' >
                <section  className='fileList__files__file__withSubtitle' >
                    <PrimaryText >{file.name}</PrimaryText>
                    <PrimaryText primary={false} >{file.client}</PrimaryText>
                </section>
                <PrimaryText >{file.createdOn.date}</PrimaryText>
                <section className='fileList__files__file__withSubtitle' >
                    <PrimaryText >{file.lastEditedOn.date}</PrimaryText>
                    <PrimaryText primary={false} >{file.lastEditedOn.time}</PrimaryText>
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