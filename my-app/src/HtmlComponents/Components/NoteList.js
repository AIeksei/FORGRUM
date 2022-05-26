import React from 'react'
import "../Css/NoteList.css";
import {NoteForm} from './NoteForm'
function NoteList(props){
    return (
      <div className='all_comments'>
          {props.note.notes.map(note => {
            return (
              <div> 
              <NoteForm note={note} />
              </div> 
            );
          })}
       </div>
      )
}
export {NoteList};