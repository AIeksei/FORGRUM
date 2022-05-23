import '../Css/AdminBody.css';
import React from 'react';
function AdminBody() {
	return (
		<div className="bodyAdmin">
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
						<img className='delete' src='Delete.png'></img>
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
						<img className='delete' src='Delete.png'></img>
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

export {AdminBody};