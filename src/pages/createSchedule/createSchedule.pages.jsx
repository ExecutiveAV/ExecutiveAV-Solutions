import React from 'react';
import { useSelector } from 'react-redux';
import './createSchedule.styles.scss';

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import Title from "../../components/title/title.component";
import CreatorPanel from '../../components/creatorPanel/creatorPanel.component';
import SchedulePreview from '../../components/schedulePreview/shcedulePreview.component';
import { PDFViewer, PDFDownloadLink } from 'react-pdf-browser';
import SchedulePDF from '../../PDFs/SchedulePDF';

const CreateSchedule = () => {
    const {scheduleDocument} = useSelector(state => state.schedule)
    let Schedule = () => (<SchedulePDF schedule={scheduleDocument} />);

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
                <PDFDownloadLink className='download' document={<Schedule />} fileName="TEST.pdf" >
                    {
                        ({blob, url, loading, error}) => {
                            return loading ? "Loading" : "Download NOW!"
                        }
                    }
                </PDFDownloadLink>
            </ViewPanel>
        </section>
    );};

export default CreateSchedule;