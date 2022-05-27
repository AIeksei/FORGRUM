import '../Css/Profile.css';
import React from 'react';
import { EditText } from '../Axioses/axiosRename'
import { ShowColor, Colours } from '../Components/Recolor'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UseAuth } from '../Hook/UseAuth';
import axios from 'axios';
import { BranchForm } from '../Components/BranchInfo/BranchForm';
import { CustomLink } from '../Components/CustomLink';
import { AxiosColor } from '../Axioses/axiosColor';
const Profile = () => {
    const { id } = useParams();
    const user = UseAuth();
    const { signout } = UseAuth();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [numb, setNumb] = useState(null);
    const [rate, setRate] = useState(null);
    const [nameColor, setNameColor] = useState(null);
    const [avatar, setAvatar] = useState([]);

    const avatarSelected = (e) => {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            document.getElementById('img1').src = fileReader.result;
            console.log('updated');
        }

        fileReader.readAsDataURL(e.target.files[0]);
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append('file', file)
        axios.put(`http://localhost:8080/users/${id}/avatar`, formData,
            {
                headers: {
                    Authorization: 'Basic ' + user.code
                }
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}/avatar`,
            {
                headers: {
                    Authorization: 'Basic ' + user.code
                }, responseType: 'blob'
            }).then((resp) => {
                setAvatar(URL.createObjectURL(resp.data));
            });
    }, [setAvatar]);

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`,
            {
                headers: {
                    Authorization: 'Basic ' + user.code
                }
            }).then((resp) => {
                const name = resp.data.name;
                const email = resp.data.email;
                const numb = resp.data.phoneNumber;
                const rate = resp.data.rating;
                const nameColor = resp.data.nameColor;
                setName(name)
                setEmail(email)
                setNumb(numb)
                setRate(rate)
                setNameColor(nameColor)
            });
        axios.get(`http://localhost:8080/posts/user/${id}`,
            {
                headers: {
                    Authorization: 'Basic ' + user.code
                }
            }).then((resp) => {
                const allBranches = resp.data;
                setPosts(allBranches);
            })
    }, [setNumb, setEmail, setName, setPosts, setRate]);

    const reName = () => {
        EditText(document.getElementById("UserName"), user)

    }

    const showColorS = () => {
        ShowColor();
        let newColor = document.getElementById("UserName").classList[0].toUpperCase();
        AxiosColor(newColor, user)
    }
    const out = () => signout(() => navigate('/login', { replace: true }));


    return (
        <div className='bodyProfile'>
            {user.language == "ru" ? (<>  <div className='user'>
                <img className='userSize' id='img1' defaultValue="../profile.png" src={avatar}></img>
                {user.id == id ? (
                    <input type='file' className='AvatarLoad'
                        placeholder='Загрузить аватар' onChange={avatarSelected}></input>
                ) : (<></>)}

                <div className='points'>Очки {rate}</div>
                {user.moderator ? (
                    <button className='marginRight0' >Заблокировать</button>) : (<></>)}
            </div>
                <div className='userInfo'>
                    <div className='profborder'>
                        <p>{email}</p>
                    </div>
                    <div className='profborder'>
                        <p id="UserName" className={nameColor}>{name}</p>
                        {user.id == id ? (
                            <div>
                                <img className='edit' src='../Edit.png' onClick={reName}></img>
                                <img className='colors edit' src='../colors.png' onClick={showColorS}></img>
                            </div>) : (<></>)}

                    </div>
                    <div className='profborder'>
                        <p>{numb}</p>
                    </div>
                    {user.id == id ? (
                        <><Link to="create" className='loginbutton' >
                            <input type='button' value="Создать свою ветку" className='marginRight0'>
                            </input> </Link>
                            <button className='marginRight0' onClick={out}>Выйти из аккаунта</button></>)
                        : (<></>)}

                </div>
                <Colours rate = {user.rate} ></Colours>
                <div className='recEndExit'>
                    <div className='record'>
                        <p>Ветки в которых принимается участие</p>
                        {
                            posts.map(post => (
                                <CustomLink key={post.id} to={`/branch/${post.id}`}>
                                    <BranchForm branches={post} />
                                </CustomLink>
                            ))
                        }
                    </div>
                </div></>) : (<>  <div className='user'>
                    <img className='userSize' id='img1' defaultValue="../profile.png" src={avatar}></img>
                    {user.id == id ? (
                        <input type='file' className='AvatarLoad'
                            placeholder='Load avatar' onChange={avatarSelected}></input>
                    ) : (<></>)}

                    <div className='points'>Points {rate}</div>
                    {user.moderator ? (
                        <button className='marginRight0' >Block</button>) : (<></>)}
                </div>
                    <div className='userInfo'>
                        <div className='profborder'>
                            <p>{email}</p>
                        </div>
                        <div className='profborder'>
                            <p id="UserName" className={nameColor}>{name}</p>
                            {user.id == id ? (
                                <div>
                                    <img className='edit' src='../Edit.png' onClick={reName}></img>
                                    <img className='colors edit' src='../colors.png' onClick={showColorS}></img>
                                </div>) : (<></>)}

                        </div>
                        <div className='profborder'>
                            <p>{numb}</p>
                        </div>
                        {user.id == id ? (
                            <><Link to="create" className='loginbutton' >
                                <input type='button' value="Create new branch" className='marginRight0'>
                                </input> </Link>
                                <button className='marginRight0' onClick={out}>Exit</button></>)
                            : (<></>)}
                    </div>
                    <Colours></Colours>
                    <div className='recEndExit'>
                        <div className='record'>
                            <p>Using branch</p>
                            {
                                posts.map(post => (
                                    <CustomLink key={post.id} to={`/branch/${post.id}`}>
                                        <BranchForm branches={post} />
                                    </CustomLink>
                                ))
                            }
                        </div>
                    </div></>)
            }
        </div>
    )

}
export { Profile }