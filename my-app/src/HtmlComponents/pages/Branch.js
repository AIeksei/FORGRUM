import '../Css/Branch.css';
import React from 'react';
import {NoteList} from '../Components/NoteList'
import { useParams } from 'react-router-dom';
const Branch = () => {
	const Vetka = [
		{branchid: 1,
		notes:[
		{ id: 1, autor: "lol", text: "CAT" , img: "profile.png"},
		{ id: 2, autor: "test", text: "DOG", img: "profile.png" },
		{ id: 3, autor: "test1", text: "Navi", img: "profile.png" },
		{ id: 4, autor: "art", text: "Faze", img: "profile.png" },
		{ id: 5, autor: "Alexey", text: "Ya ustal hochu spat", img: "profile.png" }
	]},
	{branchid: 2,
		notes: [
		{ id: 1, autor: "test", text: "Navi" , img: "profile.png"},
		{ id: 2, autor: "test", text: "Navi", img: "profile.png" },
		{ id: 3, autor: "test", text: "Navi", img: "profile.png" },
		{ id: 4, autor: "test", text: "Navi", img: "profile.png" },
		{ id: 5, autor: "test", text: "Ya ustal hochu spat", img: "profile.png" }
	]},
	{branchid: 3,
		notes: [
		{ id: 1, autor: "lol", text: "lol" , img: "profile.png"},
		{ id: 2, autor: "lol", text: "lol", img: "profile.png" },
		{ id: 3, autor: "lol", text: "lol", img: "profile.png" },
		{ id: 4, autor: "lol", text: "lol", img: "profile.png" },
		{ id: 5, autor: "lol", text: "Ya ustal hochu spat", img: "profile.png" }
	]},
	{branchid: 4,
		notes: [
		{ id: 1, autor: "Faze", text: "Faze" , img: "profile.png"},
		{ id: 2, autor: "Faze", text: "Faze", img: "profile.png" },
		{ id: 3, autor: "Faze", text: "Faze", img: "profile.png" },
		{ id: 4, autor: "Faze", text: "Faze", img: "profile.png" },
		{ id: 5, autor: "Faze", text: "Faze", img: "profile.png" }
	]}
]
//console.log(Vetka.branchid[1]);
	const {branchid} = useParams();
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
			{Vetka.map(notes => {
				if (notes.branchid = branchid){
            return (
              <NoteList note={Vetka[branchid - 1]} />
            );}
          })}
	

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