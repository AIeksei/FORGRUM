import React from 'react'
import '../Css/BranchForm.css'
import axios from 'axios';
import { useState } from 'react';
function BranchForm({ branches }) {
 const [count,setCount] = useState();
axios.get(`http://localhost:8080/comments/count/${branches.id}`,
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
}).then(function(resp){
   
    setCount(resp.data);
  
});
    return (
        <li className='rootBranch'>
            <div className="AutorBranch"> {branches.autor} </div>
            <div className='NameRoot'>
                <div className='titleBranch' >{branches.title} </div>
                <div className='tags'> Теги: {branches.id}  </div>
            </div>
            <div className='countMessage'>Количество сообщений : <div className='count' value = {count}> {count} </div> </div>
            
        </li>
    )
}
export {BranchForm}