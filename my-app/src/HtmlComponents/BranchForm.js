import React from 'react'
import './Css/BranchForm.css'
export default function BranchForm({branches}){
    return (
        <div className='BranchForm'> 
            <div className='BranchItem'> {branches.autor} </div>
            <div> {branches.title} </div>
            <div> {branches.count} </div>
            <div> {branches.tag}  </div>
        </div>
    )
}