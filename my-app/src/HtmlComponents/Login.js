import './Css/Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bulma-components/lib/components/button';
const Login = ({ToReg, ToMain})=>{
    return (
        <div className='bodyLogin'>
            <div className='borderLogin'>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput'></input>
                <input placeholder='Пароль'
                    type='text' className='logininput'></input>
                    <Button to="/main" renderAs={Link}>My button linked to react-router-dom</Button>
                <div className='butreg'> 
                <Link to="/registration" >У вас нет аккаунта?</Link>
                </div>
            </div>
        </div>
    )
}

export {Login};