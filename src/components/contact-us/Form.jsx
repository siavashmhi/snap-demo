import React, { useState } from 'react';
import Button from '../shared/button/Button';
import './form.scss'

const Form = () => {
    
    const [data, setData] = useState({
        name: '',
        email: '',
        textArea: ''
    })

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    return (
        <div className='form-wrapper'>
            <h3>نظرات شما</h3>
            <form className='form-container'>
                <input
                 name='name'
                 value={data.name}
                 onChange={changeHandler}
                 type="text"
                 placeholder=' نام و نام خانوادگی'/>

                <input 
                 name='email'
                 value={data.email}
                 onChange={changeHandler}
                 type="email"
                 placeholder='ایمیل خود را وارد کنید'/>

                <textarea
                 name="textArea"
                 value={data.textArea}
                 onChange={changeHandler}
                 cols="30" rows="10"
                 placeholder='پیام'></textarea>

                <div className="form-container__btn">
                    <Button
                     className='btn btn--block btn--primary'
                     text='ثبت نظرات' />
                </div>
            </form>
        </div>
    );
};

export default Form;