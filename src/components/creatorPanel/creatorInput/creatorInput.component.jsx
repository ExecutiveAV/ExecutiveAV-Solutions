import React from 'react';
import './creatorInput.styles.scss';

const CreatorInput = ({type, id, label, subLabel, options, action, lowest, selected}) => {
    if (type === "options") {
        const selections = options.map(option => (
            selected ?
            <option className='creatoInputContainer__options__option' selected >{option.option}</option> :
            <option className='creatoInputContainer__options__option' >{option.option}</option>
        ))
        return (
            <section className='creatorInputContainer' >
                <label className='creatorInputContainer__label' htmlFor={id} >{label}</label>
                {
                    selected ? 
                    (<select className='creatorInputContainer__options' id={id} onChange={e => action(e.target.value)} >
                        {
                            selections
                        }
                        <option className='creatorInputContainer__options__option new' >New</option>
                    </select>) :
                    (<select className='creatorInputContainer__options' id={id} onChange={e => action(e.target.value)} >
                    <option className='creatorInputContainer__options__option new' selected disabled > -- Choose an option --</option>
                        {
                            selections
                        }
                        <option className='creatorInputContainer__options__option new' >New</option>
                    </select>)
                }
            </section>
        )
    } else if (type === "number") {
        return (
            <section className='creatorInputContainer' >
                <label className='creatorInputContainer__label' htmlFor={id} >{label}</label>
                <input type="number" min={lowest} defaultValue={selected} className='creatorInputContainer__options' id={id} onChange={e => action(e.currentTarget.value)} />
            </section>
        )
    } else if (type === "date") {
        return (
            <section className='creatorInputContainer' >
                <label className='creatorInputContainer__label' htmlFor={id} >{label}</label>
                <input type="date" className='creatorInputContainer__options' id={id} onChange={e => action(e.currentTarget.value)} />
            </section>
        )
    } else if (type === "toggle") {
        return (
            <section className='creatorInputContainer' >
                <label className='creatorInputContainer__label' htmlFor={id} >{label}</label>
                <label className='switch' >
                    <input id={id} type={'checkbox'} />
                    <span className="slider round" />
                </label>
                
            </section>
        )
    }
};

export default CreatorInput;