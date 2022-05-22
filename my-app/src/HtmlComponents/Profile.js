import './Css/Profile.css';
import React from 'react';
import rename from '.Rename'
const Profile =({ProfToLog})=> {
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
            </div>
            <div className='recEndExit'>
                <div className='record'>
                    <p>Ветки в которых принимается участие</p>
                </div>
                <input type="button" className='marginRight0' onClick={ProfToLog} value="Выйти из аккаунта"></input>
            </div>
        </div>
    )
}

export default Profile;