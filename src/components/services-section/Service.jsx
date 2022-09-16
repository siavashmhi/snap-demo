import React from 'react';
import macIcon from '../../assets/images/i-mac-1.png'
import './service.scss'

const Service = () => {
    return (
        <section className='services services-container'>
            <h2 className='services__title'> سرویس های تپسی </h2>
            <div class="services__tabs">
                <a class="tab active" data-tab-target="nav-classic-tab">
                    <img
                        src="https://tapsi.ir/images/home/cc-classic.png"
                        alt="tapsi-classic-icon"
                    />
                    <p>تپسی کلاسیک</p>
                </a>
                <a class="tab" data-tab-target="nav-motopeyk-tab">
                    <img
                        src="https://tapsi.ir/images/home/cc-motopeyk.png"
                        alt="motopeyk-icon"
                    />
                    <p>موتوپیک</p>
                </a>
                <a class="tab" data-tab-target="nav-autopeyk-tab">
                    <img
                        src="https://tapsi.ir/images/home/cc-autopeyk.png"
                        alt="autopeyk-icon"
                    />
                    <p>اتوپیک</p>
                </a>
                <a class="tab" data-tab-target="nav-plus-tab">
                    <img
                        src="https://tapsi.ir/images/home/cc-plus.png"
                        alt="tapsi-plus-icon"
                    />
                    <p>تپسی پلاس</p>
                </a>
                <a class="tab" data-tab-target="nav-tel-tab">
                    <img src="https://tapsi.ir/images/home/cc-tel.png" alt="tapsi-tel-icon" />
                    <p>تپسی تلفنی</p>
                </a>
                <a class="tab" data-tab-target="nav-hamyar-tab">
                    <img src="https://tapsi.ir/images/home/cc-hamyar.png" alt="hamyar-icon" />
                    <p>همیار</p>
                </a>
                <a class="tab" data-tab-target="nav-hamkhat-tab">
                    <img
                        src="https://tapsi.ir/images/home/cc-hamkhat.png"
                        alt="hamkhat-icon"
                    />
                    <p>هم&zwnj;خط</p>
                </a>
                <a class="tab" data-tab-target="nav-taxi-tab">
                    <img
                        src="https://tapsi.ir/images/home/cc-taxi.png"
                        alt="tapsi-taxi-icon"
                    />
                    <p>تاکسی</p>
                </a>
                <a class="tab" data-tab-target="nav-line-tab">
                    <img
                        src="https://tapsi.ir/images/home/cc-line.png"
                        alt="tapsi-line-icon"
                    />
                    <p>تپسی لاین</p>
                </a>
            </div>
        </section>
    );
};

export default Service;