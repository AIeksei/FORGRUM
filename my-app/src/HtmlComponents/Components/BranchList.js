import React from 'react'
import '../Css/BranchList.css'
import {BranchForm} from './BranchForm'
import { CustomLink } from '../Components/CustomLink'


function Branchlist(props){
  console.log(props)
    return (
      <ul className='branchList' id = "ul">
          {props.branches.map(branches => {
            return (
              <CustomLink className='noDecor' key={branches.id} to = {`/branch/${branches.id}`}> 
              <BranchForm
              branches={branches}
              />
              </CustomLink>
            );
          })}
       </ul>
      )
}

export {Branchlist};