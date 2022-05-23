import '../Css/Branch.css';
import React from 'react';
import {NoteList} from '../Components/NoteList'
const Branch = () => {
	const notes = [
		{ id: 1, autor: "lol", text: "CAT" , img: "profile.png"},
		{ id: 2, autor: "test", text: "DOG", img: "profile.png" },
		{ id: 3, autor: "test1", text: "Navi", img: "profile.png" },
		{ id: 4, autor: "art", text: "Faze", img: "profile.png" },
		{ id: 5, autor: "Alexey", text: "Ya ustal hochu spat", img: "profile.png" }
	]
	return (
		<div>
			<div className="branchBody">
				<div className="comment">
					<div className="photo">
						<img className='size' src='profile.png'></img>
						<div className='user_name'> Имя пользователя</div>
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
			</div>
			<NoteList notes={notes} />
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

export {Branch};