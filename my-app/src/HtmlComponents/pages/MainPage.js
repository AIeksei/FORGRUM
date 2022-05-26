import '../Css/MainPage.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { FindingBranches } from '../Components/FindingTagAndTitle';
import { SortListTitle } from '../Components/SortListTitle';
import { SortListCount } from '../Components/SortListCount';
import { CustomLink } from '../Components/CustomLink';
import axios from 'axios';
import { BranchForm } from '../Components/BranchInfo/BranchForm';
import { UseAuth } from '../Hook/UseAuth';

const MainPage = () => {

    const [posts, setPosts] = useState([]);
    const {code} = UseAuth();
    useEffect(() => {
        axios.get("http://localhost:8080/posts", {
            headers: {
                Authorization: 'Basic ' + code
            }
        }).then((resp) => {
            const allBranches = resp.data;
            setPosts(allBranches)
        });
    }, [setPosts]);

    const SortListrise = () => {
        SortListCount(true);
    }

    const sortListdecreasing = () => {
        SortListCount(false);
    }

    const FindingBranchesTag = () => {
        FindingBranches(document.getElementById("tagFind"), document.getElementsByClassName("tags"));
    }

    const FindingBranchesTitle = () => {
        FindingBranches(document.getElementById("titleFind"), document.getElementsByClassName("titleBranch"));
    }
    return (
        <div className='bodyMain'>
            <div className='space_beetwen search'>
                <div className='search'>
                    <img className='searchImg' src='search.png'></img>
                    <input type="text" className="searchInput" placeholder="Поиск по тегу" id="tagFind"
                        onKeyUp={FindingBranchesTag}></input>
                </div>
                <div className='search'>
                    <img className='searchImg' src='search.png'></img>
                    <input type="text" className="searchInput" placeholder="Поиск по заголовку" id="titleFind"
                        onKeyUp={FindingBranchesTitle}></input>
                </div>
            </div>
            <div className="Sort">Сортировка

                <input type={"button"} value="По заголовку" className="select" onClick={SortListTitle} />
                <input type={"button"} value="Кол-во сообщений ↑" className="select" onClick={SortListrise} />
                <input type={"button"} value="Кол-во сообщений ↓" className="select" onClick={sortListdecreasing} />
                <input type={"button"} value="По последнему сообщению" className="select" onClick={sortListdecreasing} />

            </div>
            <ul className='branchList' id="ul">
                {
                    posts.map(post => (
                        <CustomLink key={post.id} to={`/branch/${post.id}`}>
                            <BranchForm branches={post} />
                        </CustomLink>
                    ))
                }
            </ul>
        </div>
    )
}

export { MainPage };