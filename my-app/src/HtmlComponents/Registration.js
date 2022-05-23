import './Css/Registration.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {valid} from './Components/ValidReg'
const Registration =() =>{
    function onCreateUserButtonClick(event){
    let checked;
    const email = event.target.parentElement.children[1].value;
    const name =  event.target.parentElement.children[3].value.trim();
    const number =  event.target.parentElement.children[5].value;
    const password =  event.target.parentElement.children[7].value;
    const passwordConfirm =  event.target.parentElement.children[9].value;

    let radios = document.querySelectorAll('input[type="radio"]');
    let gender;
    
    for (let radio of radios) {
      if (radio.checked) { 
         gender = radio.value;
      } 
    }  
    checked = valid(email, name, password, passwordConfirm, number, gender);
}
    return (
        <div className='bodyRegistration'>
            <div className='borderRegistration'>
                <p className='preg'>Регистрация</p>
                <input placeholder='e-mail'
                    type='email' className='reginput' id = "email"></input>
                    <div  className = "Err" id = "emERR"></div>
                <input placeholder='Имя'
                    type='text' className='reginput' id = "name"></input>
                   <div  className = "Err" id = "nameERR"></div>
                <input placeholder='Номер телефона'
                    type='tel' className='reginput' id = "number"></input>
                    <div  className = "Err" id = "phERR"></div>
                <input placeholder='Пароль'
                    type='password' className='reginput' id = "password"></input>
                    <div  className = "Err" id = "passERR"></div>
                     <input placeholder='Повторите пароль'
                    type='password' className='reginput'  id = "passwordConfirm"></input>
                <div className='genders'>
                    <div className='gender'>
                        <input type='radio' name='gender' id = "genderM" value = "M"></input>
                        <p>Муж</p>
                    </div>
                    <div className='gender'>
                        <input type='radio' name='gender'  id = "genderF" value = "F"></input>
                        <p>Жен</p>
                    </div>
                    <div  className = "Err" id = "genERR"></div>
                </div>
                
                <input  type='button' value="Зарегестрироваться" className='regbutton' onClick={onCreateUserButtonClick}></input>
                <Link to="/login" >Уже есть профиль?</Link>
            </div>
        </div>
    )
}

export {Registration};