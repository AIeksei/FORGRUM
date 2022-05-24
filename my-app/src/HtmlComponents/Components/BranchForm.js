import React from 'react'
import '../Css/BranchForm.css'
function BranchForm({ branches }) {
    return (
        <li className='rootBranch'>
            <div className="AutorBranch"> {branches.autor} </div>
            <div className='NameRoot'>
                <div className='titleBranch' >{branches.title} </div>
                <div className='tags'> Теги: {branches.id}  </div>
            </div>
            <div className='countMessage'>Количество сообщений : <div className='count' value = {branches.id}> {branches.id} </div> </div>
            
        </li>
    )
}
export {BranchForm}