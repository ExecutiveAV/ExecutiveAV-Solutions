import React from 'react';
import './creatorInput.styles.scss';

const CreatorInput = ({type, id, label, subLabel, options}) => {
    console.log(options);
    if (type === "options") {
        const selections = options.map(option => (
            <option className='creatoInputContainer__options__option' >{option.option}</option>
        ))
        return (
            <section className='creatorInputContainer' >
                <label className='creatorInputContainer__label' for={id} >{label}</label>
                <select className='creatorInputContainer__options' id={id} >
                    {
                        selections
                    }
                    <option className='creatorInputContainer__options__option new' >New</option>
                </select>
            </section>
        )
    }
};

export default CreatorInput;