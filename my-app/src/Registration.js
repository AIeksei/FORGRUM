import './Registration.css';
import React from 'react';
const Registration =({ToLog,ToReg}) =>{
    return (
        <div className='bodyRegistration'>
            <div className='border'>
                <p className='preg'>Регистрация</p>
                <input placeholder='e-mail'
                    type='text' className='reginput' id = "email"></input>
                <input placeholder='Имя'
                    type='text' className='reginput' id = "name"></input>
                <input placeholder='Номер телефона'
                    type='text' className='reginput' id = "number"></input>
                <input placeholder='Пароль'
                    type='password' className='reginput' id = "password"></input>
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
                <input  type='button' value="Зарегестрироваться" className='regbutton' onClick={ToReg}></input>
                <a className='phref' href ="" onClick={ToLog}>Уже есть профиль?</a>
            </div>
        </div>
    )
}

export default Registration;