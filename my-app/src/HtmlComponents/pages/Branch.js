import '../Css/Branch.css';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NoteForm } from '../Components/NoteForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { rateDown, rateUp, deleteBranch } from '../Components/buttons'
import { UseAuth } from '../Hook/UseAuth';
import { EditText } from '../Axioses/axioisUpdateBranch';
import { censor } from '../Components/censor';

const Branch = () => {
	const navigate = useNavigate();
	const user = UseAuth();
	const { branchid } = useParams();
	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState([]);
	const [text, setText] = useState([]);
	const [ownerId, setUserId] = useState([]);
	const [userName, setUserName] = useState([]);
	const [avatar, setAvatar] = useState([]);
	const [UserAvatar, setUserAvatar] = useState([]);

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
		axios.get(`http://localhost:8080/users/${user.id}/avatar`,
			{
				headers: {
					Authorization: 'Basic ' + user.code
				}, responseType: 'blob'
			}).then((resp) => {
				setUserAvatar(URL.createObjectURL(resp.data));
			});
	}, [setUserAvatar]);
	let id;
	useEffect(() => {
		axios.get(`http://localhost:8080/posts/${branchid}`,
			{
				headers: {
					Authorization: 'Basic ' + user.code
				}
			}).then((resp) => {
				const title = resp.data.title;
				const text = resp.data.text;
				id = resp.data.postOwnerID;
				setTitle(title)
				setText(text)
				setUserId(id)
				console.log(ownerId)
			}).then(function () {
				axios.get(`http://localhost:8080/users/${id}`,
					{
						headers: {
							Authorization: 'Basic ' + user.code
						}
					}).then((resp) => {
						const userName = resp.data.name;
						setUserName(userName)
					}).then(function () {
						axios.get(`http://localhost:8080/users/${id}/avatar`,
							{
								headers: {
									Authorization: 'Basic ' + user.code
								}, responseType: 'blob'
							}).then((resp) => {
								setAvatar(URL.createObjectURL(resp.data));
							});
					})});
	
	}, [setTitle, setText, setUserName, setAvatar]);

	const newNotesButton = (event) => {
		let textMessage = document.getElementById('inputComment');
		axios.post("http://localhost:8080/comments", {
			'text': censor(textMessage.value),
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
			}).then(function () {
				rateUp(user.id, 5, user.code)
			});

	};

	const reName = () => {
		EditText(document.getElementById("userComment"), title, branchid, ownerId, user.code)
	}
	return (
		<div>
			<div className="branchBody">
				<div className="comment">
					<div className="photo">
						<img className='size' src={avatar} onClick={() => navigate(`/profile/${ownerId}`, { replace: false })} ></img>
						{userName}
					</div>
					<div className='message'>
						<div className='text'>
							<div className='h'>{title}</div>
							{user.id == ownerId ? (<div className='p' id="userComment" onClick={reName}>{text}</div>)
								: (<><div className='p' id="userComment">{text}</div></>)}
						</div>
						<div className='ocenka'>
							<img className='sizelike' src='../Like.png' onClick={() => rateUp(ownerId, 1, user.code)}></img>
							<img className='sizedislike' src='../DisLike.png' onClick={() => rateDown(ownerId, 1, user.code)}></img>
							{user.moderator ? (<img className='sizedislike' src='../Delete.png'
								onClick={() => deleteBranch(ownerId, branchid, user.code, navigate)}></img>) : (<></>)}
						</div>
					</div>
				</div>
			</div>
			{notes.map(notes => {
				return (
					<NoteForm note={notes} branchid={branchid} />
				);
			})}
			<div className="comment">
				<div className="photo">
					<img className='size' src={UserAvatar}></img>
					<div> {user.name}</div>
				</div>
				<div className='message sendColumn'>
					<textarea id="inputComment" placeholder='Enter text'
						name='text' className='msinput' />
					{user.language == "ru" ? (<> <button className='sendButton' onClick={newNotesButton} >??????????????????</button>
					</>) : (<> <button className='sendButton' onClick={newNotesButton} >Send</button> </>)}
				</div>
			</div>
		</div>

	);
}
export { Branch };