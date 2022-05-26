import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
const NewTexts = ({id}) => {
    console.log(id)
    const [tags,setTags] = useState([]);
    useEffect ( () => {
        axios.get(`http://localhost:8080/tags/post/${id}`,
        {
            headers: {
                Authorization: 'Basic dXNlcjpwYXNz' 
          }
       }).then(function(resp){
           setTags(resp.data);
       });
      },[setTags]);
    
   return(
    <> {
        tags.map(tag => (
            tag.tag
            ))
    } </>
   )
}
export {NewTexts}