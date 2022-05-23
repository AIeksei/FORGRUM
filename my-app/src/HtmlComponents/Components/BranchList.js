import React from 'react'
import '../Css/BranchList.css'
import {BranchForm} from './BranchForm'

function Branchlist(props){
    return (
      <ul className='branchList' id = "ul">
          {props.branches.map(branches => {
            return (
              <BranchForm
              branches={branches}
              />
            );
          })}
       </ul>
      )
}

export {Branchlist};