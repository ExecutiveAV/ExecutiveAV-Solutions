import React from 'react';

import './header.style.scss';

import HeaderTitle from './headerTitle/headerTitle.component';
import Headers from './headers/headers.component';

const Header = ( { client, invoiceNumber, venue, venueAddress, venueCity } ) => {
    return (
        <section >
            <HeaderTitle client={client} />
            <Headers content={invoiceNumber} />
            <Headers content={venue} />
            <Headers content={venueAddress} gray />
            <Headers content={venueCity} gray />
        </section>
    );
};

export default Header;