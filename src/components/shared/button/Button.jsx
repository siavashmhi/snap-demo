import React from 'react';
import './button.scss'

const Button = ({className, text}) => {
    return (
        <button className={className}>
            {text}
        </button>
    );
};

export default Button;