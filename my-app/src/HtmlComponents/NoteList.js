import React from 'react'
import NoteForm from './NoteForm'

function NoteList(props){
    return (
      <ul>
          {props.notes.map(notes => {
            return (
              <NoteForm
              notes={notes}
              />
            );
          })}
       </ul>
      )
}
export default NoteList;