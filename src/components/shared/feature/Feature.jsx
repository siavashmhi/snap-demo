import React from 'react';
import Button from '../button/Button.jsx'
import './feature.scss'

const Feature = ({text, title, btnText, image}) => {
    return (
        <section className='feature feature--container block'>
            <div className='feature__image'>
                <img src={image} alt="img" />
            </div>
            <div className='feature__details'>
                <h2 className='feature__title'>{title}</h2>
                <p className='feature__text'>{text}</p>
                <Button className='btn btn--primary' text={btnText} />
            </div>
        </section>
    ); 
};

export default Feature;