import React from 'react'

function NoteForm({notes}){
    return (
        <li> 
            <div> {notes.autor} </div>
            <div> {notes.title} </div>
            <div> {notes.text}  </div>
        </li>
    )
}
export default NoteForm;