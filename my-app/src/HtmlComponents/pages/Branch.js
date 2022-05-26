import '../Css/Branch.css';
import React from 'react';
import {NoteList} from '../Components/NoteList'
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { NoteForm } from '../Components/NoteForm';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {like, dislike,deleteBranch} from '../Components/buttons'
import { UseAuth } from '../Hook/UseAuth';
const Branch = () => {
	const navigate = useNavigate();
	const user = UseAuth();
/*const handleSubmit = (event) => {
	console.log("clicked")
	navigate(0, {replace: true})
  }*/
  const {branchid} = useParams();
  const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState([]);
	const [text, setText] = useState([]);
	const notes2 =[
		{ id: 1, autor: "lol", text: "CAT" , img: "profile.png"},
		{ id: 2, autor: "test", text: "DOG @gg, @dog", img: "profile.png" },
		{ id: 3, autor: "test1", text: "Navi", img: "profile.png" },
		{ id: 4, autor: "art", text: "Faze", img: "profile.png" },
		{ id: 5, autor: "Alexey", text: "Ya ustal hochu spat", img: "profile.png" }
	]
  //запрос на вывод коментов под постом
    useEffect ( () => {
      axios.get(`http://localhost:8080/comments/post/${branchid}`,
		 {
			 headers: {
				 Authorization: 'Basic dXNlcjpwYXNz' 
		   }
		}).then((resp) => {
          const allBranches =  resp.data;
          setNotes(allBranches)
      });
    },[setNotes]);
	console.log(notes);
//запрос на вывод корневого сообщения
    useEffect ( () => {
      axios.get(`http://localhost:8080/posts/${branchid}`,
	  {
		headers: {
			Authorization: 'Basic dXNlcjpwYXNz' 
	  }
   }).then((resp) => {
          const title =  resp.data.title;
		  const text =  resp.data.text;
          setTitle(title)
		  setText(text)
      });
    },[setTitle,setText]);
//запрос на отправление нового сообщения
let newNote = [{
	'text': 'text',
	'commentOwnerID': 2,
	'postID' : 2
},
{
	'text': 'text',
	'commentOwnerID': 2,
	'postID' : 2
}
]
function newNotesButton(event) {
	
	 newNote = {
		'text': 'text',
		'commentOwnerID': 2,
		'postID' : 2
	}
	console.log("click")
};
useEffect ( () => {
setNotes(newNote)
},[setNotes]);

const deleteBranched = ()=>{
  deleteBranch()
  navigate('/main', {replace: true})
}

	/*axios.post("http://localhost:8080/comments/", {
			'text': text, 
			'commentOwnerID': 2,
			'postID' : 2
		 },
		 {
			 headers: {
				 Authorization: 'Basic dXNlcjpwYXNz' 
		   }
		});*/





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
						<img className='sizelike' src='../Like.png' onClick={like}></img>
                   		 <img className='sizedislike' src='../DisLike.png' onClick={dislike}></img>
							{user.mod ?(<img className='sizedislike' src='../Delete.png' onClick={deleteBranched}></img>) : (<></>)}
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
					<textarea id = "inputComment" placeholder='Введите текст'
					 name='text' className='msinput'/>
					 <button className='sendButton' onClick= {newNotesButton} >Отправить</button>
				</div>				
			</div>
		</div>

	);
}


export {Branch};