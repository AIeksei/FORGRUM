import '../Css/MainPage.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {Branchlist} from '../Components/BranchList';
import { FindingBranches } from '../Components/FindingTagAndTitle';
import { SortListTitle } from '../Components/SortListTitle';
import { SortListCount } from '../Components/SortListCount';
import { Link } from 'react-router-dom' 
import axios from 'axios';
import { BranchForm } from '../Components/BranchForm';
const MainPage =()=> {
    let branchesWas = [
        {id: 1, autor: "lol", count: 105, tag: "cats", title : "DOG" },
        {id: 2, autor: "test", count: 24, tag: "dogs", title : "CAT" },
        {id: 3, autor: "test1", count: 32, tag: "major", title : "Navi" },
        {id: 4, autor: "art", count: 14, tag: "major", title : "AFaze" }
    ]
    const [posts, setPosts] = useState([]);
    useEffect ( () => {
      axios.get("http://localhost:8080/posts").then((resp) => {
          const allBranches =  resp.data;
          setPosts(allBranches)
      });
    },[setPosts]);

        console.log(posts)
    return (
        <div className='bodyMain'>
            <div className='space_beetwen search'>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по тегу" id ="tagFind" 
                    onKeyUp={()=>{FindingBranches(document.getElementById("ul"),document.getElementById("tagFind"), document.getElementsByClassName("tags"));}}></input>
                </div>
                <div className='search'>
                    <img className='searchImg' src='search.png' ></img>
                    <input type="text" className="searchInput" placeholder="Поиск по заголовку" id ="titleFind" 
                    onKeyUp={()=>{FindingBranches(document.getElementById("ul"),document.getElementById("titleFind"), document.getElementsByClassName("titleBranch"));}}></input>
                </div>
            </div>
            <div className="Sort">
             
                    <input type={"button"} value = "title"  className="select" onClick={()=>SortListTitle(document.getElementById("ul"), document.getElementsByClassName("titleBranch"))}/>
                    <input type={"button"} value = "count M > L"  className="select" onClick={()=>SortListCount(document.getElementById("ul"), document.getElementsByClassName("count"), true)}/>
                    <input type={"button"} value = "count L > M"  className="select" onClick={()=>SortListCount(document.getElementById("ul"), document.getElementsByClassName("count"), false)}/>
                
            </div>
          {
            posts.map(post => (
                <Link key={post.id} to = {`/branch/${post.id}`}> 
                <BranchForm
                branches={post}
                />
                </Link>
                ))
            }
        </div>
    )
}

export {MainPage};