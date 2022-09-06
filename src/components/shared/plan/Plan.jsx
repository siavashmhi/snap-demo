import React from 'react';
import Card from './Card.jsx';
import './plan.scss'

const Plan = () => {

    return (
        <div className='block-plan'>
            <div className="plan">
                <Card
                 cardClass='card card--secoundary'
                 badgeClass='badge'
                 btnClass='btn btn--secoundary btn--block'
                 />
            </div>
            <div className="plan plan--popular">
                <Card
                 cardClass='card card--primary'
                 badgeClass='badge--primary'
                 btnClass='btn btn--primary btn--block'
                 />
            </div>
            <div className="plan">
                <Card
                 cardClass='card card--secoundary'
                 badgeClass='badge'
                 btnClass='btn btn--secoundary btn--block'
                 />
            </div>
        </div>
    );
};

export default Plan;