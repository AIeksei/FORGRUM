import React from 'react'
import './Css/BranchList.css'
import {BranchForm} from './BranchForm'

function Branchlist(props){
    return (
      <div className='branchList'>
          {props.branches.map(branches => {
            return (
              <BranchForm
              branches={branches}
              />
            );
          })}
       </div>
      )
}

export {Branchlist};