import './Login.css';
import React from 'react';
const Login = ({ToReg})=>{
    return (
        <div className='body'>
            <div className='border'>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput'></input>
                <input placeholder='Пароль'
                    type='text' className='logininput'></input>
                <input  type = 'button' value = "Войти" className = 'loginbutton'></input>
                <div className='butreg'> 
                    <input type={'button'} id ="reg" value={"У вас нет аккаунта?"} onClick={ToReg}></input>
                </div>
                
            </div>
        </div>
    )
}

export default Login;