import React from 'react';
import List from '../list/List';
import Badge from '../badge/Badge';

const Card = (props) => {

    const {cardClass, badgeClass} = props

    return (
        <div className={cardClass}>
            <div className="card__header">
                <span className="plan__introduction">
                    <span className="plan__name">اقتصادی</span>
                    <Badge class={badgeClass} />
                </span>
                <span className="plan__price">390,000</span>
                <span className="plan__billing-cycle">ماهانه / تومان</span>
                <span className="plan__description">سرویس ماشین های کلاسیک</span>
            </div>
            <div className="card__body">
                <List 
                listClass='list list--tick'
                item1='کیفیت عالی'
                item2='کم سر و صدا'
                item3='زمان محدود'
                item4='سرویس روزانه'
                />
            </div>
    </div>
    );
};

export default Card;