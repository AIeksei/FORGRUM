import './Css/Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Login = ()=>{
    return (
        <div className='bodyLogin'>
            <div className='borderLogin'>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput'></input>
                <input placeholder='Пароль'
                    type='text' className='logininput'></input>
                 <Link to="/main" className='loginbutton' > <input  type = 'button' value = "Войти" className = 'loginbutton'  ></input> </Link>
                <div className='butreg'> 
                <Link to="/registration" >У вас нет аккаунта?</Link>
                </div>
            </div>
        </div>
    )
}

export {Login};