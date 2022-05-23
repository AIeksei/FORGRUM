import React from 'react'
import "../Css/NoteList.css";
import {NoteForm} from './NoteForm'

function NoteList(props){
    return (
      <div className='all_comments'>
          {props.notes.map(note => {
            return (
              <NoteForm note={note} />
            );
          })}
       </div>
      )
}
export {NoteList};