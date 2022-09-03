import React from 'react';
import styled from 'styled-components';

const Button1 = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    white-space: nowrap;
    padding: 2rem 2.5rem;
    margin: 1rem 0;
    text-align: center;
    border-radius: 8px;
    font-size: 1.4rem;
    background-color: ${props => props.color === 'primary' ? '#ff5722' : ' #ff7a50'};
    color: var(--color-white);
    font-family: iranYekan;
    @media (min-width: 1024px){
        font-size: 1.6rem;
    }
`

const Button = (props) => {

    const {text, bgColor} = props

    return (
        <Button1 color={bgColor}>{text}</Button1>
    );
};

export default Button;
