import '../Css/Login.css';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UseAuth } from '../Hook/UseAuth';
import validator from 'validator';
import axios from 'axios';
import { encode } from 'base-64';

const Login = ()=>{
    const idUser = 2;
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from?.pathname || '/';
    const {signin} = UseAuth();

    const handleSubmit = (event) => {
        let checked = false;
        event.preventDefault();
        const form = event.target;
        const email = form.username.value;
        const password = form.pass.value;
        if(!validator.isEmail(email)) {
            document.getElementById("emERR").innerHTML = "Введите почту";
            checked = false;
        }else{document.getElementById("emERR").innerHTML = "";}
        let encoded = encode(email + ":" + password);
       axios.get(`http://localhost:8080/users/email/${email}`,{
                headers: {
                    Authorization: 'Basic dXNlcjpwYXNz'
              }
           }).then (function(res){
                let id = res.data.id;
                let isModerator = res.data.moderator; 
                let name = res.data.name; 
                let nameColor = res.data.nameColor; 
                let enabled = res.data.enabled; 
                if(enabled)
                signin(id, isModerator, name, nameColor, () => navigate("/main", {replace: true}));
            }).catch(function(e){
               document.getElementById("authERR").innerHTML = "Неверный логин или пароль";
            })
      
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