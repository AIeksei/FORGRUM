import '../Css/CreateBranch.css';
import React from 'react';
import { addTag } from "../Components/AddTag";
import { UseAuth } from '../Hook/UseAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { censor } from '../Components/censor';
import { rateUp } from '../Components/buttons';

const CreateBranch = () => {
  const [tags, setTags] = useState();
  const navigate = useNavigate();
  const { id, code } = UseAuth();
  const user = UseAuth();
  let postIdd;

  const checker = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const text = form.text.value;
    const censoredText = censor(text);
    axios.post("http://localhost:8080/posts", {
      'title': title,
      'text': censoredText,
      'postOwnerID': id
    },
      {
        headers: {
          Authorization: 'Basic ' + code
        }
      }).then(function (res) {
        postIdd = res.data.id;
        let TagArr = tags.split(', ');
        sendRequestTags(TagArr, postIdd);
 
      }).then(function (res) {
        rateUp(user.id, 5, user.code)
        navigate(`/branch/${postIdd}`, { replace: true });
      }).catch(function (e) {
        alert(e)
        checker = false;
      })

  }
  const sendRequestTags = async (tagArr, postIdd) => {
    for (let i = 0; i < tagArr.length; i++) {
      const tag = tagArr[i];
      await axios.post("http://localhost:8080/tags", {
        'tag': tagArr[i],
        'postID': postIdd
      },
        {
          headers: {
            Authorization: 'Basic ' + code
          }
        });
    }
  }

  const addTagS = () => {
    const newTag = addTag();
    setTags(newTag)
  }

  return (
    <>
    {user.language == "Russian" ?(<><div className='bodyCreateBranch'>
      <form className='borderCreateBranch' onSubmit={handleSubmit}>
        <p className='CreateBranch'>Создание ветки</p>
        <input placeholder='Введите заголовок'
          type='text' className='CreateBranchinput' name='title'></input>
        <textarea placeholder='Текст ветки'
          type='text' className='CreateBranchArea' name='text' id='text'></textarea>
        <div className='tagAdding'>
          <input placeholder='Теги' id="inputTag"
            type='text' className='CreateBranchTag'></input>
          <input type='button' value="Добавить тег" className='CreateTagbutton'
            onClick={addTagS}></input>
        </div>
        <div id="tagsPlaceholder" className='addedTags'></div>
        <button type="submit" value="Создать ветку" className='CreateBranchbutton' > Создать ветку </button>
      </form>
    </div></>):(<><div className='bodyCreateBranch'>
      <form className='borderCreateBranch' onSubmit={handleSubmit}>
        <p className='CreateBranch'>Creating branch</p>
        <input placeholder='Title'
          type='text' className='CreateBranchinput' name='title'></input>
        <textarea placeholder='Text of post'
          type='text' className='CreateBranchArea' name='text' id='text'></textarea>
        <div className='tagAdding'>
          <input placeholder='Теги' id="inputTag"
            type='text' className='CreateBranchTag'></input>
          <input type='button' value="Add tag" className='CreateTagbutton'
            onClick={addTagS}></input>
        </div>
        <div id="tagsPlaceholder" className='addedTags'></div>
        <button type="submit" value="Create branch" className='CreateBranchbutton' >Create branch</button>
      </form>
    </div></>)
    }
    </>
  );
}

export { CreateBranch }; 