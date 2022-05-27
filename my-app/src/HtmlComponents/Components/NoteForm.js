import React from 'react'
import "../Css/NoteList.css";
import {rateDown, rateUp, deleteComm} from './buttons'
import { EditText } from '../Axioses/axiosUpdareNote';
import { UseAuth } from '../Hook/UseAuth';
import { useNavigate } from 'react-router-dom';

function NoteForm({ note, branchid }) {
   const navigate = useNavigate();
   const user = UseAuth();
   const reName = () => {
    EditText(document.getElementById(note.id), branchid, note )
}
    return (
        <div className='comment'>
            <div className='photo'>
                <div> <img className='size' src={note.img} onClick = {() => navigate(`/profile/${note.commentOwnerID}`, {replace: false}) } /> </div>
                <div> {note.autor} </div>
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