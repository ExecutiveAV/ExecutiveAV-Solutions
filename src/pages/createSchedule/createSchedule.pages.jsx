import React from 'react';
import './createSchedule.styles.scss';

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import Title from "../../components/title/title.component";

const CreateSchedule = () => {
    return (
        <section className='createScheduleContainer' >
            <ActionPanel >
                <Title title="Executive AV" />    
            </ActionPanel>
            <ViewPanel >
                
            </ViewPanel>
        </section>
    );
};

export default CreateSchedule;