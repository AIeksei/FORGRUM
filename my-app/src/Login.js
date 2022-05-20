import './Login.css';
import React from 'react';
function Login(){
    return (
        <div className='body'>
            <div className='border'>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput'></input>
                <input placeholder='Пароль'
                    type='text' className='logininput'></input>
                <input  type = 'button' value = "Войти" className = 'loginbutton'></input>
                <div></div>
            </div>
        </div>
    )
}

export default Login;