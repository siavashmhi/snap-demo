import React, { useState }  from 'react';
import Button from '../shared/button/Button.jsx'
import logo from '../../assets/images/logo.svg'
import './navbar.scss'

const Navbar = () => {

    const [navMenu, setNavMenu] =  useState(false)
    const clickHandler = () => {setNavMenu(!navMenu)}

    return (
        <header className='main-header'>
            <nav className='nav nav-container'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className={navMenu ? 'nav__toggler nav__open' : 'nav__toggler'} onClick={clickHandler}>
                    <div className="bar bar-one"></div>
                    <div className="bar bar-two"></div>
                    <div className="bar bar-three"></div>
                </div>
                <ul className={navMenu ? 'nav__list nav__menu' : 'nav__list'}>
                    <li className='nav__item'><a href="#"> پشتیبانی </a></li>
                    <li className='nav__item'><a href="#"> خدمات کسب و کارها </a></li>
                    <li className='nav__item'><a href="#"> فرصت های شغلی  </a></li>
                    <li className='nav__item'><a href="#"> وبلاگ </a></li>
                    <li className='nav__item btn__container'> 
                        <Button className='btn btn--primary' text='دانلود تپسی' />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;