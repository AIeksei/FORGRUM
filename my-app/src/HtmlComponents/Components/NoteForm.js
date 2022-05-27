import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../Css/NoteList.css";
import {rateDown, rateUp, deleteComm} from './buttons'
import { EditText } from '../Axioses/axiosUpdareNote';
import { UseAuth } from '../Hook/UseAuth';
import { useNavigate } from 'react-router-dom';

function NoteForm({ note, branchid }) {
   const navigate = useNavigate();
   const user = UseAuth();
   const [avatar, setAvatar] = useState([]);
   const [userName, setUserName] = useState([]);
   useEffect(() => {
            axios.get(`http://localhost:8080/users/${note.commentOwnerID}`,
                {
                    headers: {
                        Authorization: 'Basic ' + user.code
                    }
                }).then((resp) => {
                    const userName = resp.data.name;
                    setUserName(userName)
                }).then(function () {
                    axios.get(`http://localhost:8080/users/${note.commentOwnerID}/avatar`,
                        {
                            headers: {
                                Authorization: 'Basic ' + user.code
                            }, responseType: 'blob'
                        }).then((resp) => {
                            setAvatar(URL.createObjectURL(resp.data));
                        });
                });

}, [setUserName, setAvatar]);

   const reName = () => {
    EditText(document.getElementById(note.id), branchid, note, user.code )
}
    return (
        <div className='comment'>
            <div className='photo'>
                <div> <img className='size' src={avatar} onClick = {() => navigate(`/profile/${note.commentOwnerID}`, {replace: false}) } /> </div>
                <div> {userName} </div>
            </div>
            <div className='message'>
            {user.id == note.commentOwnerID ? (<div  id = {note.id} onClick={reName}> {note.text} </div>) 
            : (<div> {note.text} </div>)} 
                <div className='ocenka'>
                    <img className='sizelike' src='../Like.png' onClick={() =>rateUp(note.commentOwnerID, 1 ,user.code)}></img>
                    <img className='sizedislike' src='../DisLike.png' onClick={() => rateDown(note.commentOwnerID, 1, user.code)}></img>           
                    {user.moderator ?(<><img className='sizelike' src='../Delete.png' 
                    onClick= {() => deleteComm(note.commentOwnerID, note.id, user.code)}></img></>) : (<></>) }                
                </div>
            </div>       
        </div>
    )
}
export {NoteForm};