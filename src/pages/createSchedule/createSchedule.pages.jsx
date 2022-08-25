import React from 'react';
import './createSchedule.styles.scss';

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import Title from "../../components/title/title.component";
import CreatorPanel from '../../components/creatorPanel/creatorPanel.component';

const CreateSchedule = () => (
    <section className='createScheduleContainer' >
        <ActionPanel >
            <section className='createScheduleContainer__titleContainer' >
                <Title path="/" title="Executive AV" />
            </section>
            <CreatorPanel />
                
        </ActionPanel>
        <ViewPanel >
        </ViewPanel>
    </section>
    );

export default CreateSchedule;