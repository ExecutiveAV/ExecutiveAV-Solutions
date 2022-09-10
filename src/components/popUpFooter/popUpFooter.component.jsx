import React from 'react';
import { useDispatch } from 'react-redux'
import './popUpFooter.styles.scss';

import { updateNewEntryPortalStatus } from '../../redux/portal/newEntryPortal.slice';

const PopUpFooter = () => {
    const dispatch = useDispatch();
    return (
        <section className='popUpFooter' >
            <p className='popUpFooter__button cancel' onClick={e => {
                dispatch(updateNewEntryPortalStatus(false))
            }} >Cancel</p>
            <p className='popUpFooter__button add' >Add</p>
        </section>
    );
};

export default PopUpFooter;