import './Login.css';
import React from 'react';
const Login = ({ToReg, ToMain})=>{
    return (
        <div className='bodyLogin'>
            <div className='border'>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput'></input>
                <input placeholder='Пароль'
                    type='text' className='logininput'></input>
                <input  type = 'button' value = "Войти" className = 'loginbutton' onClick={ToMain}></input>
                <div className='butreg'> 
                    <input type={'button'} id ="reg" value={"У вас нет аккаунта?"} onClick={ToReg}></input>
                </div>
                
            </div>
        </div>
    )
}

export default Login;