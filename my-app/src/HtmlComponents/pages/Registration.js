import '../Css/Registration.css';
import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import {valid} from '../Components/ValidReg'
import { Registr } from '../Axioses/axiosRegistration';
const Registration =() =>{
    const navigate = useNavigate();
    function onCreateUserButtonClick(event){
    const email = event.target.parentElement.children[1].value;
    const name =  event.target.parentElement.children[3].value.trim();
    const number =  event.target.parentElement.children[5].value;
    const password =  event.target.parentElement.children[7].value;
    const passwordConfirm =  event.target.parentElement.children[9].value;

    let radios = document.querySelectorAll('input[type="radio"]');
    let gender;
    let checked;
    for (let radio of radios) {
      if (radio.checked) { 
         gender = radio.value;
      } 
    }  
    
     checked = valid(email, name, password, passwordConfirm, number, gender);
    
      if (checked) {
        Registr(name, email, gender,  number, password, passwordConfirm,  navigate)
      }

    
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