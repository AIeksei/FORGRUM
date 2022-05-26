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
        }
        let encoded = encode(email + ":" + password);
       console.log(encoded)
       axios.get(`http://localhost:8080/users/email/${email}`,{
                headers: {
                    Authorization: 'Basic dXNlcjpwYXNz'
              }
           }).then (function(res){
                alert(JSON.stringify(res.data));
                let id = res.data.id;
                let isModerator = res.data.moderator; 
                let name = res.data.name; 
                signin(id, isModerator, name, () => navigate("/main", {replace: true}));
            }).catch(function(e){
               alert(e)
            })
           
       //navigate("/main", {replace: true})
      // signin(user, idUser, true, () => navigate("/main", {replace: true}));
        
        
       /* if(checked)
        */
    }
  /* function AuthAcc(event){
        let checked;
        let code = encode(email + ":" + password)
          if (email.trim() != '') {
           axios.post("http://localhost:8080/users/", {
               'email': email, 
                'password': password,
            }, {
                headers: {
                    Authorization: 'Basic ' + code
              }
           }).then (function(res){
                alert(JSON.stringify(res));
            }).catch(function(e){
               alert(e)
            })
        
          }
    
        
    }*/
    return (
        <div className='bodyLogin'>           
            <form  className='borderLogin' onSubmit={handleSubmit}>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput' name = "username"></input>
                     <div  className = "Err" id = "emERR"></div>
                <input placeholder='Пароль'
                    type='text' className='logininput' name = "pass"></input>
                <button type="submit"  className = 'loginbutton'>Войти</button>
                <div className='butreg'> 
                <Link  to="/registration" >У вас нет аккаунта?</Link>
                </div>
            </form>    
        </div>
    )
}

export {Login};