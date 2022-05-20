import './Profile.css';
import React from 'react';
function Profile() {
    return (
        <div className='body'>
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
                <p className='marginRight0'>Выйти из аккаунта</p>
            </div>
        </div>
    )
}

export default Profile;