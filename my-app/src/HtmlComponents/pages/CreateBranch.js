import '../Css/CreateBranch.css';
import React from 'react';
import {addTag} from "../Components/AddTag";
const CreateBranch = () => {

	return (
		<div className='bodyCreateBranch'>
			<div className='borderCreateBranch'>
				<p className='CreateBranch'>Создание ветки</p>
				<input placeholder='Введите заголовок'
					type='text' className='CreateBranchinput'></input>
				<textarea placeholder='Текст ветки'
					type='text' className='CreateBranchArea'></textarea>
				<div className='tagAdding'>
					<input placeholder='Теги' id="inputTag"
						type='text' className='CreateBranchTag'></input>
					<input type='button' value="Добавить тег" className='CreateTagbutton' 
					onClick={addTag}></input>
				</div>
				<div id="tagsPlaceholder" className='addedTags'></div>
				<input type='button' value="Создать ветку" className='CreateBranchbutton' ></input>
			</div>
		</div>
	);
}
import { UseAuth } from '../Hook/UseAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateBranch = ()=> {
   const navigate = useNavigate();
   const {id} = UseAuth();
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
    const postId = res.data.id;
    axios.post("http://localhost:8080/tags/", {
    'tag': "title",
    'postID': postId,
 }, 
 {
	 headers: {
		 Authorization: 'Basic dXNlcjpwYXNz' 
   }
})
}).catch(function(e){
  alert(e)
  checker = false;
}).then( function(){
  if (checker)
  navigate("/branch/1", {replace: true})});
 }
  return (
    <div className='bodyCreateBranch'>
    <form className='borderCreateBranch' onSubmit={handleSubmit}>
        <p className='CreateBranch'>Создание ветки</p>
        <input placeholder='Введите заголовок'
            type='text' className='CreateBranchinput' name = 'title'></input>
        <textarea placeholder='Текст ветки'
            type='text' className='CreateBranchArea' name = 'text'></textarea>
              <textarea placeholder='Теги'
            type='text' className='CreateBranchTag'></textarea>
           <button type="submit"  value = "Создать ветку" className = 'CreateBranchbutton' > Создать ветку </button>
    </form>
</div>
  );
} 

export { CreateBranch };