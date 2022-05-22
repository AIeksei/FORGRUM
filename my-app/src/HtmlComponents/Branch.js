import './Css/Branch.css';
import React from 'react';
import NoteList from './NoteList'
const Branch =()=> {
	const notes = [
        {id: 1, autor: "lol", text : "CAT" },
        {id: 2, autor: "test", text : "DOG" },
        {id: 3, autor: "test1", text: "Navi" },
        {id: 4, autor: "art", text: "Faze" },
		{id: 5, autor: "Alexey", text: "Ya ustal hochu spat"}
    ]
	return (
		<div>
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
		</div>
		<ul>
		<NoteList notes = {notes} />
			</ul>
		</div>
		
	);
}

export default Branch;