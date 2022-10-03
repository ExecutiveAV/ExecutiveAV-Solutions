import React from 'react';
import './schedules.styles.scss'

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import FilePanel from '../../components/filePanel/filePanel.component';
import Title from '../../components/title/title.component';
import SchedulePreview from '../../components/schedulePreview/shcedulePreview.component';


const Schedules = () => {
    return (
        <section className='scheduleContainer' >
            <ActionPanel >
                <section className='scheduleContainer__titleContainer' >
                    <Title path="/" title={"Executive AV"} />
                </section>
                <FilePanel kind="schedules" />
            </ActionPanel>
            <ViewPanel >
            <SchedulePreview />
            </ViewPanel>
        </section>
    );
};

export default Schedules;