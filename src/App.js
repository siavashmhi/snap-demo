import React from "react";
import './styles/fonts.css';
import './styles/App.css';
import Button from './components/shared/button/Button';
import Plan from "./components/shared/plan/Plan";
import Card from "./components/shared/plan/Card";
import Feature from "./components/shared/feature/Feature";
import monitorIcon from './assets/images/i-mac-1.png'

function App() {
  return (
    <div>
      {/* <Button className='btn btn--primary btn--block' /> */}
      {/* <Card cardClass='card card--primary' badgeClass='badge' /> */}
      <Feature
       text='
       پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
       هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها
       و سازمان‌ها فراهم می‌کند. و با استفاده از
       آن می‌توانید ماموریت های درون‌شهری و
       ارسال کالاهای خود را به سادگی مدیریت کنید.'
       title='خدمات تپسی ویژه کسب‌وکارها'
       btnText='ورود و ثبت نام پنل سازمانی'
       image={monitorIcon}
       />
    </div>
  );
}

export default App;