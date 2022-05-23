import React from 'react'
import './Css/BranchForm.css'
function BranchForm({ branches }) {
    return (
        <li className='rootBranch'>
            <div className="AutorBranch"> {branches.autor} </div>
            <div className='NameRoot'>
                <div className='titleBranch' >{branches.title} </div>
                <div> Теги: {branches.tag}  </div>
            </div>
            <div className='countMessage'>Количество сообщений : {branches.count} </div>
            
        </li>
    )
}
export {BranchForm}