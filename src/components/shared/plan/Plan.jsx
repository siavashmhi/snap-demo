import React from 'react';
import Card from './Card.jsx';
import './plan.scss'

const Plan = (props) => {

    return (
        <div className='block-plan'>
            <div className="plan">
                <Card cardClass='card card--secoundary'  badgeClass='badge' />
            </div>
            <div className="plan">
                <Card cardClass='card card--primary'  badgeClass='badge--primary' />
            </div>
            <div className="plan">
                <Card cardClass='card card--secoundary'  badgeClass='badge' />
            </div>
        </div>
    );
};

export default Plan;