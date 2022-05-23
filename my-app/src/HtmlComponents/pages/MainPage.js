import '../Css/MainPage.css';
import React from 'react';
import {Branchlist} from '../Components/BranchList';
import { FindingBranches } from '../Components/FindingTagAndTitle';
import { SortListTitle } from '../Components/SortListTitle';
import { SortListCount } from '../Components/SortListCount';
const MainPage =()=> {
    const branches = [
        {id: 1, autor: "lol", count: 101, tag: "cats", title : "DOG" },
        {id: 2, autor: "test", count: 24, tag: "dogs", title : "CAT" },
        {id: 3, autor: "test1", count: 32, tag: "major", title : "Navi" },
        {id: 4, autor: "art", count: 14, tag: "major", title : "AFaze" }
    ]
    return (
        <div className='bodyMain'>
            <div className='space_beetwen search'>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по тегу" id ="tagFind" onKeyUp={()=>{FindingBranches(document.getElementById("ul"),document.getElementById("tagFind"), document.getElementsByClassName("tags"));}}></input>
                </div>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по заголовку" id ="titleFind" onKeyUp={()=>{FindingBranches(document.getElementById("ul"),document.getElementById("titleFind"), document.getElementsByClassName("titleBranch"));}}></input>
                </div>
            </div>
            <div className="Sort">
             
                    <input type={"button"} value = "title"  className="select" onClick={()=>SortListTitle(document.getElementById("ul"), document.getElementsByClassName("titleBranch"))}/>
                    <input type={"button"} value = "count"  className="select" onClick={()=>SortListCount(branches = {branches})}/>
                
            </div>
        
            <Branchlist branches = {branches} />
        </div>
    )
}

export {MainPage};