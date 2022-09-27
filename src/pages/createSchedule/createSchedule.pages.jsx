import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './createSchedule.styles.scss';

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import Title from "../../components/title/title.component";
import CreatorPanel from '../../components/creatorPanel/creatorPanel.component';
import SchedulePreview from '../../components/schedulePreview/shcedulePreview.component';
import { PDFViewer, PDFDownloadLink } from 'react-pdf-browser';
import SchedulePDF from '../../PDFs/SchedulePDF';

import {firebaseApp} from '../../utils/firebaseUtils/firebaseUtils';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore/lite';
import { updateSchedule } from '../../redux/schedule/schedule.slice';
import { useEffect } from 'react';

const db = getFirestore(firebaseApp);

const CreateSchedule = () => {
    const { scheduleDocument } = useSelector(state => state.schedule)
    let Schedule = () => (<SchedulePDF schedule={scheduleDocument} />);

    const { createdOn, editedOn } = scheduleDocument;

    const dispatch = useDispatch();

    const ifScheduleIsNew = async (createdOn) => {
        if (createdOn === null ) {
            let temp = JSON.parse(JSON.stringify(scheduleDocument));
            temp.createdOn = new Date().toString();
            temp.editedOn = new Date().toString();
            dispatch(updateSchedule({...temp}));
            setTimeout(1500);
            return 1;
        } else if (createdOn !== null) {
            let temp = JSON.parse(JSON.stringify(scheduleDocument));
            temp.editedOn = new Date().toString();
            dispatch(updateSchedule({...temp}));
            setTimeout(1500);
            return 1
        } else {
            return 0;
        }
    };

    const parseScheduleToInvoice = async schedule => {
        const { invNumber, company, location, daysData, createdOn, editedOn } = schedule;
        let days = [];
        //Go trough each day
        await daysData.map(async day => {
            let shifts = [];
            //Go trough each shift
            await day.shifts.map(async shift => {
                shifts.push({
                    guys: shift.guys,
                    timeIn: shift.timeIn,
                    timeOut: shift.timeOut
                });
            })
            days.push({
                date: day.date,
                shifts
            })
        })
        let temp = {
            invNumber,
            company,
            location,
            days,
            createdOn,
            editedOn
        };
        return temp;
    };

    const saveNewDocument = async (db) => {
        const checkDate = await ifScheduleIsNew(createdOn);
        setTimeout(1500);
        if (checkDate === 1) {
            try {
                const invoice = await parseScheduleToInvoice(scheduleDocument);
                await setDoc(doc(db, "invoices", `22${(new Date().getFullYear().toString()).slice(2, 4)}_${scheduleDocument.invNumber}`), invoice);
            } catch (error) {
                console.error(error);
            }
        }
    };



    useEffect(() => {
        if (createdOn !== null) {
            try {
                setDoc(doc(db, "schedules", `22${(new Date().getFullYear().toString()).slice(2, 4)}_${scheduleDocument.invNumber}`), scheduleDocument);
            } catch (error) {
                console.error(error);
            };
        }
    }, [editedOn]);

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
                    <PDFDownloadLink className='createScheduleContainer__buttonsContainer__button' document={<Schedule />} fileName={`22${(new Date().getFullYear().toString()).slice(2, 4)}_${scheduleDocument.invNumber}`} >
                        {
                            ({blob, url, loading, error}) => {
                                return loading ? "Loading" : "Download"
                            }
                        }
                    </PDFDownloadLink>
                    <section onClick={async e => await saveNewDocument(db)} className='createScheduleContainer__buttonsContainer__button' >
                        <p>Save</p>
                    </section>
                </section>

            </ViewPanel>
        </section>
    );
};

export default CreateSchedule;