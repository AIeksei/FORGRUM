import React from 'react'
import "../Css/NoteList.css";
import {like, dislike, deleteComm} from './buttons'

function NoteForm({ note }) {
    return (
        <div className='comment'>
            <div className='photo'>
                <div> <img className='size' src={note.img} /> </div>
                <div> {note.autor} </div>
            </div>
            <div className='message'>
                <div> {note.text} </div>
                <div className='ocenka'>
                    <img className='sizelike' src='../Like.png' onClick={like}></img>
                    <img className='sizedislike' src='../DisLike.png' onClick={dislike}></img>
                    <img className='sizelike' src='../Delete.png' onClick={deleteComm}></img>
                </div>
            </div>
            
        </div>
    )
}
export {NoteForm};