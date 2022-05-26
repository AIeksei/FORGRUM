import React from 'react'
import '../../Css/BranchForm.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Tags } from './Tags';
import { UseAuth } from '../../Hook/UseAuth';
function BranchForm({ branches }) {
    const [count, setCount] = useState();
    const {code} = UseAuth();
    useEffect(() => {
        axios.get(`http://localhost:8080/comments/count/${branches.id}`,
            {
                headers: {
                    Authorization: 'Basic ' + code
                }
            }).then(function (resp) {
                setCount(resp.data);
            })
    }, [setCount]);

    return (
        <li className='rootBranch'>
            <div className="AutorBranch"> {branches.autor} </div>
            <div className='NameRoot'>
                <div className='titleBranch' >{branches.title} </div>
                <div className='tags'> Теги:
                    {<Tags id={branches.id} />}
                </div>
            </div>
            <div className='countMessage'>Количество сообщений : <div className='count' value={count}> {count} </div> </div>

        </li>
    )
}
export { BranchForm }