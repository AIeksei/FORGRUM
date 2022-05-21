import './Registration.css';
import React from 'react';
const Registration =({ToLog}) =>{
    return (
        <div className='body'>
            <div className='border'>
                <p className='preg'>Регистрация</p>
                <input placeholder='e-mail'
                    type='text' className='reginput'></input>
                <input placeholder='Имя'
                    type='text' className='reginput'></input>
                <input placeholder='Номер телефона'
                    type='text' className='reginput'></input>
                <input placeholder='Пароль'
                    type='text' className='reginput'></input>
                     <input placeholder='Повторите пароль'
                    type='text' className='reginput'></input>
                <div className='genders'>
                    <div className='gender'>
                        <input type='radio' name='gender'></input>
                        <p>Муж</p>
                    </div>
                    <div className='gender'>
                        <input type='radio' name='gender'></input>
                        <p>Жен</p>
                    </div>
                </div>
                <input  type='button' value="Зарегестрироваться" className='regbutton'></input>
                <a className='phref' href ="" onClick={ToLog}>Уже есть профиль?</a>
            </div>
        </div>
    )
}

export default Registration;