import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './createSchedule.styles.scss';

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import Title from "../../components/title/title.component";
import CreatorPanel from '../../components/creatorPanel/creatorPanel.component';
import SchedulePreview from '../../components/schedulePreview/shcedulePreview.component';
import { PDFViewer, PDFDownloadLink } from 'react-pdf-browser';
import SchedulePDF from '../../PDFs/SchedulePDF';

import {firebaseApp} from '../../utils/firebaseUtils/firebaseUtils';
import { getFirestore, setDoc, doc } from 'firebase/firestore/lite';
import { serverTimestamp } from 'firebase/firestore';
import { updateCreatedOn, updateEditedOn } from '../../redux/schedule/schedule.slice';

const db = getFirestore(firebaseApp);

const CreateSchedule = () => {
    const { scheduleDocument } = useSelector(state => state.schedule)
    let Schedule = () => (<SchedulePDF schedule={scheduleDocument} />);


    const dispatch = useDispatch();

    const saveNewDocument = async (db, scheduleDocument) => {
        dispatch(updateCreatedOn(new Date()));
        dispatch(updateEditedOn(new Date()));
        try {
            await setDoc(doc(db, "schedules", `22${(new Date().getFullYear().toString()).slice(2, 4)}_${scheduleDocument.invNumber}`), {scheduleDocument});
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className='createScheduleContainer' >
            <ActionPanel >
                <section className='createScheduleContainer__titleContainer' >
                    <Title path="/" title="Executive AV" />
                </section>
                <CreatorPanel />
                    
            </ActionPanel>
            <ViewPanel >
                <SchedulePreview />
                {/* <PDFViewer width="100%" >
                    <SchedulePDF schedule={scheduleDocument} />
                </PDFViewer> */}
                <section className='createScheduleContainer__buttonsContainer' >
                    <PDFDownloadLink className='createScheduleContainer__buttonsContainer__button' document={<Schedule />} fileName="TEST.pdf" >
                        {
                            ({blob, url, loading, error}) => {
                                return loading ? "Loading" : "Download"
                            }
                        }
                    </PDFDownloadLink>
                    <section onClick={e => saveNewDocument(db, scheduleDocument)} className='createScheduleContainer__buttonsContainer__button' >
                        <p>Save</p>
                    </section>
                </section>

            </ViewPanel>
        </section>
    );};

export default CreateSchedule;