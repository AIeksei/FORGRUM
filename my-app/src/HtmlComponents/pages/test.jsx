import '../Css/CreateBranch.css';
import React from 'react';
import { censor } from '../Components/censor';
import { encode } from '../Components/base64Encode';
const Test = ()=> {

    return (

            <div className='borderLogin'>
                <p className='preg'>Авторизация</p>
                <input placeholder='e-mail'
                    type='text' className='logininput' name = "username" id='test'></input>
                     <div  className = "Err" id = "emERR"></div>
                <button onClick={()=>encode()} value = "Войти" className = 'loginbutton'  ></button>
            </div>
    )
} 

export {Test};