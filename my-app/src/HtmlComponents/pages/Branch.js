import '../Css/Branch.css';
import React from 'react';
import {NoteList} from '../Components/NoteList'
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { NoteForm } from '../Components/NoteForm';
import {useState, useEffect} from 'react';
import axios from 'axios';
const Branch = () => {
	const navigate = useNavigate();

/*const handleSubmit = (event) => {
	console.log("clicked")
	navigate(0, {replace: true})
  }*/
  const {branchid} = useParams();
  const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState([]);
	const [text, setText] = useState([]);
    useEffect ( () => {
      axios.get(`http://localhost:8080/comments/post/${branchid}`).then((resp) => {
          const allBranches =  resp.data;
          setNotes(allBranches)
      });
    },[setNotes]);

    useEffect ( () => {
      axios.get(`http://localhost:8080/posts/${branchid}`).then((resp) => {
          const title =  resp.data.title;
		  const text =  resp.data.text;
          setTitle(title)
		  setText(text)
      });
    },[setTitle,setText]);
	

  /*const handleSubmit = (event) => {
	const form = document.getElementById("input");
	const input = form.value;
	const note = { id: 6, autor: "NewCHEL", text: input , img: "profile.png"}
	for(let i = 0; i < 2; i++)
	return (
		<div>
		<NoteForm note={note} />
		</div>
	)
	}*/

	return (
		<div>
			<div className="branchBody">
				<div className="comment">
					<div className="photo">
						<img className='size' src='../profile.png'></img>
						<div className='user_name'> Имя пользователя</div>
					</div>
					<div className='message'>
						<div className='text'>
							<div className='h'>{title}</div>
							<div className='p'>{text}</div>
						</div>
						<div className='ocenka'>
							<img className='sizelike' src='../Like.png'></img>
							<img className='sizedislike' src='../DisLike.png'></img>
						</div>
					</div>
				</div>
			</div>
			{notes.map(notes => {
		
            return (
              <NoteForm note={notes} />
            );
			})}
	
		  <Outlet/>
			<div className="comment">
				<div className="photo">
					<img className='size' src='../profile.png'></img>
					<div> Имя пользователя</div>
				</div>
				<div className='message sendColumn'>
					<textarea id = "input" placeholder='Введите текст'
					 name='text' className='msinput'/>
					 <button className='sendButton' >Отправить</button>
				</div>				
			</div>
		</div>

	);
}


export {Branch};