import React from 'react';
import './badge.scss'

const Badge = (props) => {
    return (
        <span className={props.class}>OFF 10%</span>
    );
};

export default Badge;