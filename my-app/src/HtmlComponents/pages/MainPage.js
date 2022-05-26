import '../Css/MainPage.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {Branchlist} from '../Components/BranchList';
import { FindingBranches } from '../Components/FindingTagAndTitle';
import { SortListTitle } from '../Components/SortListTitle';
import { SortListCount } from '../Components/SortListCount';
import  { CustomLink } from '../Components/CustomLink';
import axios from 'axios';
import { BranchForm } from '../Components/BranchForm';
import { newTexts } from '../Components/NewText';
const MainPage =()=> {

    const [posts, setPosts] = useState([]);
    const [tag, setTag] = useState([]);
    useEffect ( () => {
      axios.get("http://localhost:8080/posts", {headers: {
        Authorization: 'Basic dXNlcjpwYXNz'
  }}).then((resp) => {
          const allBranches =  resp.data;
          setPosts(allBranches)
      });
    },[setPosts]);


        console.log(posts)
        const SortListTitles = ()=>{
            SortListTitle(document.getElementById("ul"), 
            document.getElementsByClassName("titleBranch"));}

        const SortListrise = ()=>{
            SortListCount(document.getElementById("ul"), 
            document.getElementsByClassName("count"), true);}

        const sortListdecreasing = ()=>{
            SortListCount(document.getElementById("ul"),
             document.getElementsByClassName("count"), false);}

        const FindingBranchesTag = ()=>{
            FindingBranches(document.getElementById("ul"),
            document.getElementById("tagFind"), document.getElementsByClassName("tags"));}

        const FindingBranchesTitle = ()=>{
            FindingBranches(document.getElementById("ul"),
            document.getElementById("titleFind"), document.getElementsByClassName("titleBranch"));}
    return (
        <div className='bodyMain'>
            <div className='space_beetwen search'>
                <div className='search'>
                    <img className='searchImg' src='search.png'></img>
                    <input type="text" className="searchInput" placeholder="Поиск по тегу" id ="tagFind" 
                    onKeyUp={FindingBranchesTag}></input>
                </div>
                <div className='search'>
                    <img className='searchImg' src='search.png'></img>
                    <input type="text" className="searchInput" placeholder="Поиск по заголовку" id ="titleFind" 
                    onKeyUp={FindingBranchesTitle}></input>
                </div>
            </div>
            <div className="Sort">Сортировка
             
                    <input type={"button"} value = "title" className="select" onClick={SortListTitles}/>
                    <input type={"button"} value = "count M > L" className="select" onClick={SortListrise}/>
                    <input type={"button"} value = "count L > M" className="select" onClick={sortListdecreasing}/>
                    <input type={"button"} value = "last message" className="select" onClick={sortListdecreasing}/>
                
            </div>
            <ul className='branchList' id = "ul">
          {
            posts.map(post => (
                <CustomLink key={post.id} to = {`/branch/${post.id}`}> 
                <BranchForm branches={post} />
                </CustomLink>
                ))
            
                 }
                 </ul>
        </div>
    )
}

export {MainPage};