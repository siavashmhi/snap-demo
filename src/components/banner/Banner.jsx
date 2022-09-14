import React from 'react';
import './banner.scss'

const Banner = () => {
    return (
        <section className="hero-section">
            <picture>
                <source
                    srcset="https://tapsi.ir/images/home/banner.webp"
                    type="image/webp"
                    media="(min-width: 768px)"
                />
                <source
                    srcset="https://tapsi.ir/images/home/banner.jpg"
                    type="image/jpg"
                    media="(min-width: 768px)"
                />
                <source
                    srcset="https://tapsi.ir/images/home/banner-mobile.webp"
                    type="image/webp"
                    media="(max-width: 768px)"
                />
                <source
                    srcset="https://tapsi.ir/images/home/banner-mobile.jpg"
                    type="image/jpg"
                    media="(max-width: 768px)"
                />
                <img
                    alt="banner"
                    src="https://tapsi.ir/images/home/banner.jpg"
                    className="banner-img"
                />
            </picture>
            <picture>
                <source
                srcset="https://tapsi.ir/images/home/mockup-phone.webp"
                type="image/webp"
                media="(min-width: 1024px)"
                />
                <source
                srcset="https://tapsi.ir/images/home/mockup-phone.png"
                type="image/png"
                media="(min-width: 1024px)"
                />
                <img alt="phone" class="banner-phone" />
            </picture>
            <div className="hero-wrapper hero-wrapper__container ">
                <div className="intro-btn">
                    <h1> تپسی </h1>
                    <h2> اپلیکیشن درخواست خودرو و پیک </h2>
                    <div className="intro-btn__wrapper">
                        <div className="intro-btn__passenger"> دانلود اپلیکیشن مسافران </div>
                        <div className="intro-btn__passenger"> وب اپلیکیشن مسافران </div>
                        <div className="intro-btn__passenger btn__passenger__three"> دانلود اپلیکیشن رانندگان </div>
                        <div className="intro-btn__passenger btn__passenger__four"> ثبت نام راننده </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;