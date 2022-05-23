import './Css/MainPage.css';
import React from 'react';
import {Branchlist} from './BranchList';
const MainPage =()=> {
    const branches = [
        {id: 1, autor: "lol", count: 101, tag: "cats", title : "CAT" },
        {id: 2, autor: "test", count: 24, tag: "dogs", title : "DOG" },
        {id: 3, autor: "test1", count: 32, tag: "cs", title : "Navi" },
        {id: 4, autor: "art", count: 14, tag: "major", title : "Faze" }
    ]
    return (
        <div className='bodyMain'>
            <div className='space_beetwen search'>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по тегу"></input>
                </div>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по заголовку"></input>
                </div>
            </div>
            <div className="Sort">
                <select name="select" className="select">
                    <option value="value1">Сортировка 1</option>
                    <option value="value2" selected>Сортировка 2</option>
                    <option value="value3">Сортировка 3</option>
                </select>
            </div>
        
            <Branchlist branches = {branches} />
        </div>
    )
}

export {MainPage};