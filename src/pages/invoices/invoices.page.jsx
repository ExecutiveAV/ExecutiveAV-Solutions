import React from 'react';

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import FilePanel from '../../components/filePanel/filePanel.component';
import Title from '../../components/title/title.component';

const Invoices = () => {
    return (
        <section className='scheduleContainer' >
            <ActionPanel >
                <section className='scheduleContainer__titleContainer' >
                    <Title path="/" title={"Executive AV"} />
                </section>
                <FilePanel />
            </ActionPanel>
            <ViewPanel >
            </ViewPanel>
        </section>
    );
};

export default Invoices;