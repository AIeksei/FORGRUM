import React from 'react'
import "../Css/NoteList.css";
import {like, dislike, deleteComm} from './buttons'
import { EditText } from './EditText';
import { UseAuth } from '../Hook/UseAuth';
import { useNavigate } from 'react-router-dom';

function NoteForm({ note }) {
   const navigate = useNavigate();
   const user = UseAuth();

   const reName = () => {
    EditText(document.getElementById("userComment"))
}
    return (
        <div className='comment'>
            <div className='photo'>
                <div> <img className='size' src={note.img} onClick = {() => navigate(`/profile/${note.commentOwnerID}`, {replace: false}) } /> </div>
                <div> {note.autor} </div>
            </div>
            <div className='message'>
            {user.id == note.commentOwnerID ? (<div onClick={reName}> {note.text} </div>) 
            : (<div> {note.text} </div>)}                 
                <div className='ocenka'>
                    <img className='sizelike' src='../Like.png' onClick={() =>like(note.commentOwnerID, user.code)}></img>
                    <img className='sizedislike' src='../DisLike.png' onClick={() => dislike(note.commentOwnerID,  user.code)}></img>           
                    {user.moderator ?(<><img className='sizelike' src='../Delete.png' onClick= {() => deleteComm(note.id, user.code)}></img></>) : (<></>) }                
                </div>
            </div>       
        </div>
    )
}
export {NoteForm};