import '../Css/Login.css';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UseAuth } from '../Hook/UseAuth';
import validator from 'validator';

const Login = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from?.pathname || '/';
    const {signin} = UseAuth();

    const handleSubmit = (event) => {
        let checked = true;
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        if(!validator.isEmail(user)) {
            document.getElementById("emERR").innerHTML = "Введите почту";
            checked = false;
        }
       // if(checked)
        signin(user, () => navigate("/main", {replace: true}));
    }

    return (
        <div className='bodyLogin'>
            <div className='borderLogin'>
            <form onSubmit={handleSubmit}>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput' name = "username"></input>
                     <div  className = "Err" id = "emERR"></div>
                <input placeholder='Пароль'
                    type='text' className='logininput'></input>
                <button type="submit" value = "Войти" className = 'loginbutton'  ></button>
                <div className='butreg'> 
                <Link to="/registration" >У вас нет аккаунта?</Link>
                </div>
            </form>
            </div>
        </div>
    )
}

export {Login};