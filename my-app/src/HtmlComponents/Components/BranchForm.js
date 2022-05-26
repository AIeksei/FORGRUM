import React from 'react'
import '../Css/BranchForm.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NewTexts } from './NewText';
function BranchForm({ branches }) {
 const [count,setCount] = useState();

 useEffect ( () => {
    axios.get(`http://localhost:8080/comments/count/${branches.id}`,
    {
        headers: {
            Authorization: 'Basic dXNlcjpwYXNz' 
      }
   }).then(function(resp){
       setCount(resp.data);
   })
  },[setCount]);

    return (
        <li className='rootBranch'>
            <div className="AutorBranch"> {branches.autor} </div>
            <div className='NameRoot'>
                <div className='titleBranch' >{branches.title} </div>
                <div className='tags'> Теги: 
               { <NewTexts id = {branches.id}/> }
                 </div>
            </div>
            <div className='countMessage'>Количество сообщений : <div className='count' value = {count}> {count} </div> </div>
            
        </li>
    )
}
export {BranchForm}