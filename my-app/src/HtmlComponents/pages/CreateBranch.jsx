import '../Css/CreateBranch.css';
import React from 'react';
import {addTag} from "../Components/AddTag";
import { UseAuth } from '../Hook/UseAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateBranch = ()=> {
  const [tags, setTags] = useState();
   const navigate = useNavigate();
   const {id} = UseAuth();
   let postIdd;

   const checker = true;

   const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const text = form.text.value;
    axios.post("http://localhost:8080/posts/", {
    'title': title,
    'text': text,
    'postOwnerID': id
 }, 
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
}).then( function(res){
   postIdd = res.data.id;
     let TagArr = tags.split(', ');
     for(let i = 0; i < TagArr.length; i++){
       const tag = TagArr[i];
    axios.post("http://localhost:8080/tags/", {
    'tag': tag,
    'postID': postIdd,
 }, 
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
})
}
navigate(`/branch/${postIdd}`, {replace: true});
}).catch(function(e){
  alert(e)
  checker = false;
})
  
 }
 const addTagS = () => {
   const newTag = addTag();
   setTags(newTag) 
 }
  return (
    <div className='bodyCreateBranch'>
      <form className='borderCreateBranch' onSubmit={handleSubmit}>
        <p className='CreateBranch'>Создание ветки</p>
        <input placeholder='Введите заголовок'
          type='text' className='CreateBranchinput' name='title'></input>
        <textarea placeholder='Текст ветки'
          type='text' className='CreateBranchArea' name='text'></textarea>
        <div className='tagAdding'>
          <input placeholder='Теги' id="inputTag"
            type='text' className='CreateBranchTag'></input>
          <input type='button' value="Добавить тег" className='CreateTagbutton'
            onClick={addTagS}></input>
        </div>
        <div id="tagsPlaceholder" className='addedTags'></div>
        <button type="submit" value="Создать ветку" className='CreateBranchbutton' > Создать ветку </button>
      </form>
    </div>
  );
} 

export {CreateBranch}; 