import React from 'react';
import './list.scss'

const List = (props) => {
    const {listClass, item1, item2, item3, item4} = props

    return (
        <ul className={listClass}>
            <li className='list__item'>{item1}</li>
            <li className='list__item'>{item2}</li>
            <li className='list__item'>{item3}</li>
            <li className='list__item'>{item4}</li>
        </ul>
    );
};

export default List;