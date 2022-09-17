import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Service from "./components/services-section/Service";
import Feature from './components/shared/feature/Feature.jsx'
import Plan from './components/shared/plan/Plan.jsx'
import ContactUs from './components/contact-us/ContactUs.jsx'
import Footer from "./components/footer/Footer";
import macIcon from './assets/images/i-mac-1.png'
import laptopIcon from './assets/images/laptop-img.webp'
import './styles/fonts.css';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <Feature
       title='خدمات تپسی ویژه کسب‌وکارها'
       text='پنل سازمانی تپسی، یک سامانه تحت وب است
        که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و
        پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و
         با استفاده از آن می‌توانید ماموریت های درون‌شهری
         و ارسال کالاهای خود را به سادگی مدیریت کنید.' 
        
        btnText='ورود و ثبت نام پنل های سازمانی'
        image={macIcon}
       />
      <Feature
       title='خرید کد اعتبار تپسی'
       text='کاربران، کسب‌وکارها و
        سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان،
        کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود،
        پرسنل و یا مشتریانشان استفاده کنند و
        از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند.
       این کدها امکان سفارشی‌سازی بر اساس مبدا،
        مقصد، زمان، درصد و مبلغ را ' 
        btnText='خرید اعتبار و تخفیف'
        image={laptopIcon}
       />
       <Plan />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;