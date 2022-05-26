import React from 'react'
import "../Css/NoteList.css";
import {like, dislike, deleteComm} from './buttons'
import {checkForMarks} from "./ToMark"
import { UseAuth } from '../Hook/UseAuth';

function NoteForm({ note }) {
   const user = UseAuth();
   let newText =checkForMarks(note.text);
   console.log(newText);
    return (
        <div className='comment'>
            <div className='photo'>
                <div> <img className='size' src={note.img} /> </div>
                <div> {note.autor} </div>
            </div>
            <div className='message'>
                <div dangerouslySetInnerHTML={newText} ></div>
                <div className='ocenka'>
                    <img className='sizelike' src='../Like.png' onClick={like}></img>
                    <img className='sizedislike' src='../DisLike.png' onClick={dislike}></img>
            
                    {user.mod ?(<><img className='sizelike' src='../Delete.png' onClick={deleteComm}></img></>) : (<></>) }
                
                </div>
            </div>       
        </div>
    )
}
export {NoteForm};