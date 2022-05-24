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
       /* const email = event.target.parentElement.children[1].value;
        const password =  event.target.parentElement.children[2].value.trim();*/
       
        let encoded = encode(email + ":" + password);
       console.log(encoded)
        /*if(!validator.isEmail(user)) {
            document.getElementById("emERR").innerHTML = "Введите почту";
            checked = false;
        }*/
       /* if(checked)
        signin(user, idUser, true, () => navigate("/main", {replace: true}));*/
    }
    function AuthAcc(event){
        let checked;
       
         /* if (email.trim() != '') {
           axios.post("http://localhost:8080/users/", {
               'email': email, 
                'password': password,
            }).then (function(res){
                alert(JSON.stringify(res));
            }).catch(function(e){
               alert(e)
            })
        
          }*/
    
        
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
                    type='text' className='logininput' name = "pass"></input>
                <button type="submit" value = "Войти" className = 'loginbutton'  ></button>
                <div className='butreg'> 
                <Link  to="/registration" >У вас нет аккаунта?</Link>
                </div>
            </form>
            </div>
        </div>
    )
}

export {Login};