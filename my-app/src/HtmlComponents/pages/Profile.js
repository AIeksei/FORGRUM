import '../Css/Profile.css';
import React from 'react';
import { rename } from '../Components/Rename'
import {showColor,Colours}  from '../Components/Recolor'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UseAuth } from '../Hook/UseAuth';
import axios from 'axios';
import { BranchForm } from '../Components/BranchForm';
import { CustomLink } from '../Components/CustomLink';
const Profile = () => {
    const { id } = useParams();
    const { signout } = UseAuth();
    const navigate = useNavigate();
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [numb, setNumb] = useState([]);
    const [posts, setPosts] = useState([]);
    const [rate, setRate] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`, 
         {
            headers: {
                Authorization: 'Basic dXNlcjpwYXNz' 
          }
       }).then((resp) => {
            console.log(resp)
            const name = resp.data.name;
            const email = resp.data.email;
            const numb = resp.data.phoneNumber;
            const rate = resp.data.rating;
            setName(name)
            setEmail(email)
            setNumb(numb)
            setRate(rate)
        },
       )
       axios.get(`http://localhost:8080/posts/user/${id}`, 
     {
	     headers: {
		     Authorization: 'Basic dXNlcjpwYXNz' 
      }
    }).then((resp) => {
        const allBranches =  resp.data;
        setPosts(allBranches);
    })}, [setNumb, setEmail, setName, setPosts, setRate]);
    const reName = () => { rename(document.getElementById("UserName")) },
        out = () => signout(() => navigate('/login', { replace: true }));
    return (
        <div className='bodyProfile'>
            <div className='user'>
                <img className='userSize' src='../profile.png'></img>
                <div className='points'>Очки {rate}</div>
            </div>
            <div className='userInfo'>
                <div className='profborder'>
                    <p>{email}</p>
                </div>
                <div className='profborder'>
                    <p id="UserName" className='black'>User{name}</p>
                    <div>
                        <img className='edit' src='../Edit.png' onClick={reName}></img>
                        <img className='colors edit' src='../colors.png' onClick={showColor}></img>
                    </div>
                    
                </div>

                <div className='profborder'>
                    <p>{numb}</p>
                </div>
                <Link to="create" className='loginbutton' >
                    <input type='button' value="Создать свою ветку" className='marginRight0'>
                    </input>
                </Link>
            </div>
            <Colours></Colours>
            <div className='recEndExit'>
                <div className='record'>
                    <p>Ветки в которых принимается участие</p>
                    {
            posts.map(post => (
                <CustomLink key={post.id} to = {`/branch/${post.id}`}> 
                <BranchForm branches={post} />
                </CustomLink>
                ))
            
                 }
                </div>
                <button className='marginRight0' onClick={out}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export { Profile };