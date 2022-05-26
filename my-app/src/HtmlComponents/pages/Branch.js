import '../Css/Branch.css';
import React from 'react';
import {NoteList} from '../Components/NoteList'
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { NoteForm } from '../Components/NoteForm';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {like, dislike,deleteBranch} from '../Components/buttons'
import { UseAuth } from '../Hook/UseAuth';
import { EditText } from '../Components/EditText';
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
	const [Ownerid, setUserId] = useState([]);
	const [userName, setUserName] = useState([]);

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
		  const id =  resp.data.postOwnerID;
          setTitle(title)
		  setText(text)
		  setUserId(id)
      }).then(function(){
		axios.get(`http://localhost:8080/users/${Ownerid}`,
	  {
		headers: {
			Authorization: 'Basic dXNlcjpwYXNz' 
	  }
	  }).then((resp) => {
		const userName =  resp.data.name;
		setUserName(userName)
	  });
    })},[setTitle,setText]);

function newNotesButton(event) {
	let textMessage = document.getElementById('inputComment')
	console.log(textMessage.value)
	axios.post("http://localhost:8080/comments/", {
		'text': textMessage.value, 
		'commentOwnerID': user.id,
		'postID' : branchid
	 },
	 {
		 headers: {
			 Authorization: 'Basic dXNlcjpwYXNz' 
	   }
	}).then(function(){
		axios.get(`http://localhost:8080/comments/post/${branchid}`,
		 {
			 headers: {
				 Authorization: 'Basic dXNlcjpwYXNz' 
		   }
		}).then((resp) => {
          const allBranches =  resp.data;
		  console.log(resp.data)
          setNotes(allBranches)
		
      });
	});

};

const deleteBranched = ()=>{
  deleteBranch(branchid)
  navigate('/main', {replace: true})
}

	const reName = () => {
		EditText(document.getElementById("userComment"))
	}
	return (
		<div>
			<div className="branchBody">
				<div className="comment">
					<div className="photo">
						<img className='size' src='../profile.png' onClick = {() => navigate(`/profile/${Ownerid}`, {replace: false})} ></img>
						<div className='user_name'> {userName}</div>
					</div>
					<div className='message'>
						<div className='text'>
							<div className='h'>{title}</div>
							<div className='p'id="userComment" onClick={reName}>{text}</div>
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
	
			<div className="comment">
				<div className="photo">
					<img className='size' src='../profile.png'></img>
					<div> {user.name}</div>
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