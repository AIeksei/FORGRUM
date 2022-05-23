import React from 'react'
import "../Css/NoteList.css";

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
                    <img className='sizelike' src='Like.png'></img>
                    <img className='sizedislike' src='DisLike.png'></img>
                </div>
            </div>
            
        </div>
    )
}
export {NoteForm};