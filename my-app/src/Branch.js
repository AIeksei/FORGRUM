import './Branch.css';
import React from 'react';
function Body() {
	return (
		<div className="body">
			<div className="comment">
				<div className="photo">
					<img className='size' src='profile.png'></img>
					<div> Имя пользователя</div>
				</div>
				<div className='message'>
					<div className='text'>
						<div className='h'>Заголовок</div>
						<div className='p'>Текст ветки</div>
					</div>
					<div className='ocenka'>
						<img className='sizelike' src='Like.png'></img>
						<img className='sizedislike' src='DisLike.png'></img>
					</div>
				</div>
			</div>
			<div className="comment">
				<div className="photo">
					<img className='size' src='profile.png'></img>
					<div> Имя пользователя</div>
				</div>
				<div className='message'>
					<div className='text'>
						<div className='p'>Комментарий</div>
					</div>
					<div className='ocenka'>
						<img className='sizelike' src='Like.png'></img>
						<img className='sizedislike' src='DisLike.png'></img>
					</div>
				</div>
			</div>
			<div className="comment">
				<div className="photo">
					<img className='size' src='profile.png'></img>
					<div> Имя пользователя</div>
				</div>
				<div className='message'>
					<textarea placeholder='Введите текст'
					 name='text' className='msinput'></textarea>
					
				</div>
			</div>
			
		</div>
	);
}

export default Branch;