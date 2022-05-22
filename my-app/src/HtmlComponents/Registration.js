import './Css/Registration.css';
import React from 'react';
const Registration =({ToLog,ToReg}) =>{
    return (
        <div className='bodyRegistration'>
            <div className='borderRegistration'>
                <p className='preg'>Регистрация</p>
                <input placeholder='e-mail'
                    type='email' className='reginput' id = "email"></input>
                    <div  className = "Err" id = "emERR"></div>
                <input placeholder='Имя'
                    type='text' className='reginput' id = "name"></input>
                   <div  className = "Err" id = "nameERR"></div>
                <input placeholder='Номер телефона'
                    type='tel' className='reginput' id = "number"></input>
                    <div  className = "Err" id = "phERR"></div>
                <input placeholder='Пароль'
                    type='password' className='reginput' id = "password"></input>
                    <div  className = "Err" id = "passERR"></div>
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
                    <div  className = "Err" id = "genERR"></div>
                </div>
                
                <input  type='button' value="Зарегестрироваться" className='regbutton' onClick={ToReg}></input>
                <div className='phref' href ="" onClick={ToLog}>Уже есть профиль?</div>
            </div>
        </div>
    )
}

export default Registration;