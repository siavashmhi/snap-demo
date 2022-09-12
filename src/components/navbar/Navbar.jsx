import React from 'react';
import Button from '../shared/button/Button.jsx'
import logo from '../../assets/images/logo.svg'
import './navbar.scss'

const Navbar = () => {
    return (
        <header className='main-header'>
            <nav className='nav nav-container'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='menu'>menu</div>
                <ul className='nav__list'>
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