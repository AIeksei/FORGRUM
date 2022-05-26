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

export { CreateBranch };