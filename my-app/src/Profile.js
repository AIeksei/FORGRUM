import './Profile.css';
import React from 'react';
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
                <div className='profborder'>
                    <p>Имя</p>
                    <img className='edit' src='edit.png'></img>
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