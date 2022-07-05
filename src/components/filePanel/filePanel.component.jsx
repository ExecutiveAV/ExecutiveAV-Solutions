import React from 'react';
import './filePanel.styles.scss'

import { Link } from 'react-router-dom';

import SearchBar from '../searchBar/searchBar.component';
import Button from '../button/button.component';
import FilterButton from '../filterButton/filterButton.component';
import FileList from '../fileList/fileList.component';

const files = [
    {
        id: "123456",
        name: "2222-47",
        client: "BlueBird",
        createdOn: {
            date: "05/10/2022",
            time: "13:35"
        },
        lastEditedOn: {
            date: "06/10/2022",
            time: "16:45"
        },
        reference: "somewhere.com",
    },
    {
        id: "1234567",
        name: "2222-48",
        client: "BlueBird",
        createdOn: {
            date: "05/10/2022",
            time: "13:35"
        },
        lastEditedOn: {
            date: "06/10/2022",
            time: "16:45"
        },
        reference: "somewhere.com",
    },
    {
        id: "1234568",
        name: "2222-49",
        client: "Show Services",
        createdOn: {
            date: "05/10/2022",
            time: "13:35"
        },
        lastEditedOn: {
            date: "06/10/2022",
            time: "16:45"
        },
        reference: "somewhere.com",
    },
]

const FilePanel = () => {
    return (
        <section className='filePanel' >
            <section className='filePanel__header' >
                <SearchBar />
                <Button customStyle="filePanel__header__button" >
                    <Link to="new" >New</Link>
                </Button>
                <FilterButton />
            </section>
            <FileList type={"Schedule #"} filesData={files} />
        </section>
    );
};

export default FilePanel;