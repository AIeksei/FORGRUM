import React from 'react'

export default function BranchForm({branches}){
    return (
        <li> 
            <div> {branches.autor} </div>
            <div> {branches.title} </div>
            <div> {branches.count} </div>
            <div> {branches.tag}  </div>
        </li>
    )
}