import React from 'react'
import "../Css/NoteList.css";
import {like, dislike, deleteComm} from './buttons'
import {checkForMarks} from "./ToMark"
import { UseAuth } from '../Hook/UseAuth';
import { useNavigate } from 'react-router-dom';

function NoteForm({ note }) {
   const navigate = useNavigate();
   const user = UseAuth();


    return (
        <div className='comment'>
            <div className='photo'>
                <div> <img className='size' src={note.img} onClick = {() => navigate(`/profile/${note.commentOwnerID}`, {replace: false}) } /> </div>
                <div> {note.autor} </div>
            </div>
            <div className='message'>
                <div dangerouslySetInnerHTML={checkForMarks(note.text)} ></div>
                <div className='ocenka'>
                    <img className='sizelike' src='../Like.png' onClick={like}></img>
                    <img className='sizedislike' src='../DisLike.png' onClick={dislike}></img>
            
                    {user.mod ?(<><img className='sizelike' src='../Delete.png' onClick= {() => deleteComm(note.id)}></img></>) : (<></>) }
                
                </div>
            </div>       
        </div>
    )
}
export {NoteForm};