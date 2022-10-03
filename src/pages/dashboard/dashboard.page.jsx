import React from 'react';
import './dashboard.styles.scss'

import ActionPanel from '../../components/actionPanel/actionPanel.component';
import ViewPanel from '../../components/viewPanel/viewPanel.component';
import Title from '../../components/title/title.component';
import MainButton from '../../components/mainButton/mainButton.component';

const Dashboard = () => {
    return (
        <section className='dashboard' >
            <ActionPanel >
                <section className='dashboard__titleContainer' >
                    <Title path="/" title="Executive AV" />
                </section>
                <section className='dashboard__quickAcces' >
                    <MainButton pathTo={"/invoices"} content={"INVOICES"}/>
                    <MainButton pathTo={""} content={"LEDGER"}/>
                    <MainButton pathTo={"/schedules"} content={"SCHEDULES"}/>
                </section>
                <section className='dashboard__averages' >
                    <Title path="/" title="Top Clients:" />
                </section>
            </ActionPanel>
            <ViewPanel >

            </ViewPanel>
        </section>
    );
};

export default Dashboard;