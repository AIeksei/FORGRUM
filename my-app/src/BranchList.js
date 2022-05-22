import React from 'react'
import BranchForm from './HtmlComponents/BranchForm'
const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}
function Branchlist(props){
    return (
      <ul style={styles.ul}>
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

export default Branchlist;