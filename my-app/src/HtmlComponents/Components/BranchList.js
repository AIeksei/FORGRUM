import React from 'react'
import '../Css/BranchList.css'
import {BranchForm} from './BranchForm'
import { Link } from 'react-router-dom' 

function Branchlist(props){
    return (
      <ul className='branchList' id = "ul">
          {props.branches.map(branches => {
            return (
              <Link key={branches.id} to = {`/branch/${branches.id}`}> 
              <BranchForm
              branches={branches}
              />
              </Link>
            );
          })}
       </ul>
      )
}

export {Branchlist};