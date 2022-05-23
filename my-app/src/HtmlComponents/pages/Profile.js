import '../Css/Profile.css';
import React from 'react';
import {rename} from '../Components/Rename'
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../Hook/UseAuth';
const Profile =()=> {
    const {signout} = UseAuth();
    const navigate = useNavigate();
    return (
        <div className='bodyProfile'>
            <div className='user'>
                <img className='userSize' src='profile.png'></img>
                <div className='points'>Очки</div>
            </div>
            <div className='userInfo'>
                <div className='profborder'>
                    <p>e-mail</p>
                </div>
                <div className='profborder'   >
                    <p id ="UserName">Имя</p>
                    <img className='edit' src='edit.png' onClick={()=>{rename(document.getElementById("UserName"));}}></img>
                </div>
                
                <div className='profborder'>
                    <p>Номер телефона</p>
                </div>
                <div className='profborder'>
                    <p>Пароль</p>
                </div>
                <Link to="create" className='loginbutton' > <input  type = 'button' value = "Создать свою ветку" className = 'marginRight0'  ></input> </Link>
            </div>
            <div className='recEndExit'>
                <div className='record'>
                    <p>Ветки в которых принимается участие</p>
                </div>
                <button value = "Выйти из аккаунта" className = 'marginRight0' onClick={() => signout(() => navigate('/login', {replace: true}))}></button>
    

            </div>
        </div>
    )
}

export {Profile};