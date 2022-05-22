import './Css/CreateBranch.css';
import React from 'react';
const createBranch = ()=> {

  return (
    <div className='bodyCreateBranch'>
    <div className='borderCreateBranch'>
        <p className='CreateBranch'>Создание ветки</p>
        <input placeholder='Введите заголовок'
            type='text' className='CreateBranchinput'></input>
        <textarea placeholder='Текст ветки'
            type='text' className='CreateBranchArea'></textarea>
              <textarea placeholder='Теги'
            type='text' className='CreateBranchTag'></textarea>
        <input  type = 'button' value = "Создать ветку" className = 'CreateBranchbutton' ></input>
    </div>
</div>
  );
} 

export default createBranch;