import '../Css/Login.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../Hook/UseAuth';
import { AxiosLogin } from '../Axioses/axiosLogin';

const Login = ()=>{

    const navigate = useNavigate();
    const {signin} = UseAuth();
    let valid = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.username.value;
        const password = form.pass.value;
        AxiosLogin(email, password, {signin}, navigate)
    }
 
    return (
        <div className='bodyLogin'>           
            <form  className='borderLogin' onSubmit={handleSubmit}>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput' name = "username"></input>
                     <div  className = "Err" id = "emERR"></div>
                <input placeholder='Пароль'
                    type='text' className='logininput' name = "pass"></input>
                    <div  className = "Err" id = "authERR"></div>
                <button type="submit"  className = 'loginbutton'>Войти</button>
                <div className='butreg'> 
                <Link  to="/registration" >У вас нет аккаунта?</Link>
                </div>
            </form>    
        </div>
    )
}

export {Login};