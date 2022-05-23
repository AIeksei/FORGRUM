import '../Css/Login.css';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UseAuth } from '../Hook/UseAuth';
const Login = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from?.pathname || '/';
    const {signin} = UseAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        console.log(user)
        signin(user, () => navigate("/main", {replace: true}));
    }
    return (
        <div className='bodyLogin'>
            <div className='borderLogin'>
            <form onSubmit={handleSubmit}>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput' name = "username"></input>
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