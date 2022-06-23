import React from 'react';

import BodyTitle from './bodyTitle/bodyTitle.component';
import Days from './days/days.component';

const days = [
    {
        dayCounter: 1,
        date: "05/20/2022",
        times: [
            {
                time: "12pm - 11pm",
                techs: [
                    {
                        name: "Aldrin Perez",
                        position: "SH",
                        hrs: "10"
                    },
                    {
                        name: "Gandhi Perez",
                        position: "SH",
                        hrs: "10"
                    },
                    {
                        name: "Aldrin Perez",
                        position: "SH",
                        hrs: "10"
                    },
                    {
                        name: "Gandhi Perez",
                        position: "SH",
                        hrs: "10"
                    },
                    {
                        name: "Gandhi Perez",
                        position: "SH",
                        hrs: "10"
                    },
                ],
            },{
                time: "6am - 4pm",
                techs: [
                    {
                        name: "Nicholas Duenas",
                        position: "SH",
                        hrs: "10"
                    },
                    {
                        name: "Christopher Padilla",
                        position: "SH",
                        hrs: "10"
                    },
                ],
            }
        ],
    },{
        dayCounter: 2,
        date: "05/20/2022",
        times: [
            {
                time: "12pm - 11pm",
                techs: [
                    {
                        name: "Aldrin Perez",
                        position: "SH",
                        hrs: "11"
                    },
                    {
                        name: "Gandhi Perez",
                        position: "SH",
                        hrs: "11"
                    },{
                        name: "Nicholas Duenas",
                        position: "SH",
                        hrs: "10"
                    },
                    {
                        name: "Christopher Padilla",
                        position: "SH",
                        hrs: "10"
                    },
                ],
            }
        ],
    },
]
/*,,*/

const Body = () => {
    return (
        <section className='schedule__days__day' >
            <BodyTitle />
            <Days days={days} />
        </section>
    );
};

export default Body;