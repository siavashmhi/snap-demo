import React from 'react';
import enemad from '../../assets/images/enemad.png'
import './footer.scss'

const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className="footer--container footer">
                <div className="footer__item">
                    <h6>تپسی</h6>
                    <a href="#"> وبلاگ تپسی </a>
                    <a href="#"> فرصت های شغلی </a>
                    <a href="#"> تماس با ما </a>
                    <a href="#"> لوگو و هویت سازمانی </a>
                </div>
                <div className="footer__item">
                    <h6>تپسی</h6>
                    <a href="#"> وبلاگ تپسی </a>
                    <a href="#"> فرصت های شغلی </a>
                    <a href="#"> تماس با ما </a>
                    <a href="#"> لوگو و هویت سازمانی </a>
                </div>
                <div className="footer__item">
                    <h6>مسافران</h6>
                    <a href="#"> دانلود اپ مسافر </a>
                    <a href="#"> نسخه ی وب تپسی </a>
                    <a href="#"> پرسش های متداول مسافران </a>
                    <a href="#"> باشگاه مشتریان </a>
                </div>
                <div className="footer__item">
                    <h6>رانندگان</h6>
                    <a href="#"> ثبت نام راننده تاکسی </a>
                    <a href="#"> دانلود اپ مسافران </a>
                    <a href="#"> پرسش های متداول مسافران </a>
                    <a href="#"> باشگاه مشتریان </a>
                </div>
                <div className="footer__item enemad">
                    <div className="footer__enemad">
                        <img src={enemad} alt='image' />
                    </div>
                    <div className="footer__enemad">
                        <img src={enemad} alt='image' />
                    </div>
                    <div className="footer__enemad">
                        <img src={enemad} alt='image' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;