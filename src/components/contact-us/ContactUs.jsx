import React from 'react';
import Form from './Form';
import './contact-us.scss'
import location from '../../assets/images/Location.svg'
import calling from '../../assets/images/Calling.svg'
import send from '../../assets/images/Send.svg'
import map from '../../assets/images/map.png'
import facebook from '../../assets/images/icons8-facebook.svg'
import instagram from '../../assets/images/icons8-instagram.svg'
import linkedin from '../../assets/images/icons8-linkedin.svg'

const ContactUs = () => {
    return (
        <section className='contact-us contact-us--container'>
            <div className='contact-us__information'>
                <div className='contact-us__address'>
                    <img src={location} alt='icon' />
                    <span>تهران ایران</span>
                </div>
                <div className='contact-us__phone-number'>
                    <img src={calling} alt='icon' />
                    <span>90454357</span>
                </div>
                <div className='contact-us__email'>
                    <img src={send} alt='icon' />
                    <span>info.developer@gmail.com</span>
                </div>
            </div>
            <div className='contact-us__map'>
                <img src={map} alt='image' />
            </div>
            <div className='contact-us__icons'>
                <span>
                    <img src={linkedin}  alt='image' />
                </span>
                <span>
                    <img src={facebook} alt='image' />
                </span>
                <span>
                    <img src={instagram} alt='image' />
                </span>
            </div>
            <div className='contact-us__form'>
                <Form />
            </div>
        </section>
    );
};

export default ContactUs;