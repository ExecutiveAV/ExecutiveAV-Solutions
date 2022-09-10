import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './newEntryPortal.styles.scss';

import PortalContainer from './portalContainer/portalContainer.component';
import PortalInput from './portalInput/portalInput.component';
import PopUpFooter from '../../popUpFooter/popUpFooter.component';

import { updateNewEntryDocument } from '../../../redux/portal/newEntryPortal.slice';

const newCompanyEntryGenerator = () => ({
    companyName: "",
    companyPOC: "",
    street: "",
    city: "",
    state: "",
    zipCode: 12345,
})

const NewEntryPortal = ({ newEntryType }) => {
    const { newEntryDocument } = useSelector(state => state.newEntryPortal);
    const dispatch = useDispatch();

    const entryUpdater = (value, valueType) => {
        dispatch(updateNewEntryDocument({value: value, type: valueType}));
    }

    return (
        <PortalContainer >
            {
                newEntryType === "company" ?
                (
                    <>
                        <PortalInput updater={value => entryUpdater(value, "companyName")} >
                            Company Name
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "companyPOC")} >
                            Company's POC
                        </PortalInput>
                        <PortalInput updater={value => entryUpdater(value, "street")} >
                            Street
                        </PortalInput>
                        <section className='address' >
                            <PortalInput updater={value => entryUpdater(value, "city")} >
                                City
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "state")} >
                                State
                            </PortalInput>
                            <PortalInput updater={value => entryUpdater(value, "zipCode")} >
                                Zip Code
                            </PortalInput>
                        </section>
                    </>
                ) :
                ""
            }
            <PopUpFooter />
        </PortalContainer>
    )
};

export default NewEntryPortal;