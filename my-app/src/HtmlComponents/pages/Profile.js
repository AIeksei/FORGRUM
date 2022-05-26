import '../Css/Profile.css';
import React from 'react';
import { EditText } from '../Components/EditText'
import { showColor, Colours } from '../Components/Recolor'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UseAuth } from '../Hook/UseAuth';
import axios from 'axios';
import { BranchForm } from '../Components/BranchInfo/BranchForm';
import { CustomLink } from '../Components/CustomLink';
const Profile = ({ profile }) => {
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
    const avatarSelected = (e) => {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            document.getElementById('img1').src = fileReader.result;
        }
        fileReader.readAsDataURL(e.target.files[0]);
    }
    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`,
            {
                headers: {
                    Authorization: 'Basic dXNlcjpwYXNz'
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
            },
            )
        axios.get(`http://localhost:8080/posts/user/${id}`,
            {
                headers: {
                    Authorization: 'Basic dXNlcjpwYXNz'
                }
            }).then((resp) => {
                const allBranches = resp.data;
                setPosts(allBranches);
            })
    }, [setNumb, setEmail, setName, setPosts, setRate]);
    const reName = () => {
        EditText(document.getElementById("UserName"))
        let newName = document.getElementById("UserName").innerText;
        setName(newName);
    }

    /*  axios.put("http://localhost:8080/users", {
          'id': user.id,
          'name': user.name,
          'email': user.email,
          'gender': user.gender,
          'phoneNumber': user.numb,
          'country': user.country,
          'language': user.language,
          'enabled': user.enabled,
          'rating': user.rate,
          'moderator': user.moderator,
          'nameColor': user.nameColor
      },
          {
              headers: {
                  Authorization: 'Basic dXNlcjpwYXNz'
              }
          });
  }*/
    const showColorS = () => {
        showColor();
        let newColor = document.getElementById("UserName").classList[0].toUpperCase();
        /*setNameColor(newColor)
        axios.put("http://localhost:8080/users", {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'gender': user.gender,
            'phoneNumber': user.numb,
            'country': user.country,
            'language': user.language,
            'enabled': user.enabled,
            'rating': user.rate,
            'moderator': user.moderator,
            'nameColor': user.nameColor
        },
            {
                headers: {
                    Authorization: 'Basic dXNlcjpwYXNz'
                }
            });*/
    },
        out = () => signout(() => navigate('/login', { replace: true }));


    return (
        <div className='bodyProfile'>
            <div className='user'>
                <img className='userSize' id='img1' src='../profile.png'></img>
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
                            <img className='edit' src='../Edit.png' onClick={() => reName}></img>
                            <img className='colors edit' src='../colors.png' onClick={() => showColorS}></img>
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
            <Colours></Colours>
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
            </div>
        </div>
    )

}
export { Profile }