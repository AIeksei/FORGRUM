import '../Css/Branch.css';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NoteForm } from '../Components/NoteForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { like, dislike, deleteBranch } from '../Components/buttons'
import { UseAuth } from '../Hook/UseAuth';
import { EditText } from '../Components/EditText';

const Branch = () => {
	const navigate = useNavigate();
	const user = UseAuth();
	const { branchid } = useParams();
	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState([]);
	const [text, setText] = useState([]);
	const [Ownerid, setUserId] = useState([]);
	const [userName, setUserName] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:8080/comments/post/${branchid}`,
			{
				headers: {
					Authorization: 'Basic ' + user.code 
				}
			}).then((resp) => {
				const allBranches = resp.data;
				setNotes(allBranches)
			});
	}, [setNotes]);

	useEffect(() => {
		axios.get(`http://localhost:8080/posts/${branchid}`,
			{
				headers: {
					Authorization: 'Basic ' + user.code 
				}
			}).then((resp) => {
				const title = resp.data.title;
				const text = resp.data.text;
				const id = resp.data.postOwnerID;
				setTitle(title)
				setText(text)
				setUserId(id)
			}).then(function () {
				axios.get(`http://localhost:8080/users/${Ownerid}`,
					{
						headers: {
							Authorization: 'Basic ' + user.code 
						}
					}).then((resp) => {
						const userName = resp.data.name;
						setUserName(userName)
					});
			})
	}, [setTitle, setText]);

	const newNotesButton = (event) => {
		let textMessage = document.getElementById('inputComment')
		axios.post("http://localhost:8080/comments", {
			'text': textMessage.value,
			'commentOwnerID': user.id,
			'postID': branchid
		},
			{
				headers: {
					Authorization: 'Basic ' + user.code 
				}
			}).then(function () {
				axios.get(`http://localhost:8080/comments/post/${branchid}`,
					{
						headers: {
							Authorization: 'Basic ' + user.code 
						}
					}).then((resp) => {
						const allBranches = resp.data;
						setNotes(allBranches)
					});
			});

	};

	const reName = () => {
		EditText(document.getElementById("userComment"))
	}
	return (
		<div>
			<div className="branchBody">
				<div className="comment">
					<div className="photo">
						<img className='size' src='../profile.png' onClick={() => navigate(`/profile/${Ownerid}`, { replace: false })} ></img>
						<div className='user_name'> {userName}</div>
					</div>
					<div className='message'>
						<div className='text'>
							<div className='h'>{title}</div>
							{user.id == Ownerid? (<div className='p' id="userComment" onClick={reName}>{text}</div>) : (<><div className='p' id="userComment" onClick={reName}>{text}</div></>)}
							<div className='p' id="userComment" onClick={reName}>{text}</div>
						</div>
						<div className='ocenka'>
							<img className='sizelike' src='../Like.png' onClick={() => like(Ownerid, user.code )}></img>
							<img className='sizedislike' src='../DisLike.png' onClick={() => dislike(Ownerid, user.code )}></img>
							{user.moderator ? (<img className='sizedislike' src='../Delete.png' onClick={() => deleteBranch(branchid, user.code , navigate)}></img>) : (<></>)}
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
					<textarea id="inputComment" placeholder='Введите текст'
						name='text' className='msinput' />
					<button className='sendButton' onClick={newNotesButton} >Отправить</button>
				</div>
			</div>
		</div>

	);
}

export { Branch };