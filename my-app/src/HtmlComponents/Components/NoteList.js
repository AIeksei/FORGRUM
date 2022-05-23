import React from 'react'
import "../Css/NoteList.css";
import {NoteForm} from './NoteForm'

function NoteList(props){
 console.log(props.note)
    return (
      <div className='all_comments'>
          {props.note.notes.map(note => {
            return (
              <NoteForm note={note} />
            );
          })}
       </div>
      )
}
export {NoteList};