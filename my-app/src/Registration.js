import './Registration.css';
import React from 'react';
const Registration =({ToLog,ToReg}) =>{
    return (
        <div className='bodyRegistration'>
            <div className='borderRegistration'>
                <p className='preg'>Регистрация</p>
                <input placeholder='e-mail'
                    type='email' className='reginput' id = "email"></input>
                    <a  className = "Err" id = "emERR"></a>
                <input placeholder='Имя'
                    type='text' className='reginput' id = "name"></input>
                   <a  className = "Err" id = "nameERR"></a>
                <input placeholder='Номер телефона'
                    type='tel' className='reginput' id = "number"></input>
                    <a  className = "Err" id = "phERR"></a>
                <input placeholder='Пароль'
                    type='password' className='reginput' id = "password"></input>
                    <a  className = "Err" id = "passERR"></a>
                     <input placeholder='Повторите пароль'
                    type='password' className='reginput'  id = "passwordConfirm"></input>
                <div className='genders'>
                    <div className='gender'>
                        <input type='radio' name='gender' id = "genderM" value = "M"></input>
                        <p>Муж</p>
                    </div>
                    <div className='gender'>
                        <input type='radio' name='gender'  id = "genderF" value = "F"></input>
                        <p>Жен</p>
                    </div>
                </div>
                <a  className = "Err" id = "genERR"></a>
                <input  type='button' value="Зарегестрироваться" className='regbutton' onClick={ToReg}></input>
                <a className='phref' href ="" onClick={ToLog}>Уже есть профиль?</a>
            </div>
        </div>
    )
}

export default Registration;