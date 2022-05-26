import '../Css/Profile.css';
import React from 'react';
import { EditText } from '../Components/EditText'
import {showColor,Colours}  from '../Components/Recolor'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UseAuth } from '../Hook/UseAuth';
import axios from 'axios';
import { BranchForm } from '../Components/BranchForm';
import { CustomLink } from '../Components/CustomLink';
const Profile = ({ profile }) => {
    const { id } = useParams();
    const user = UseAuth();
    const { signout } = UseAuth();
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [numb, setNumb] = useState(null);
    const [posts, setPosts] = useState([]);
    const [rate, setRate] = useState(null);
    const [gender, setGender] = useState(null);
    const [country, setCountry] = useState(null);
    const [language, setLanguage] = useState(null);
    const [enabled, setEnabled] = useState(null);
    const [nameColor, setNameColor] = useState(null);
    const [moderator, setModerator] = useState(null);

    const avatarSelected = (e) => {
        console.log(e.target.files[0]);

        console.log(e.target.files[0]);
        //e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = () => {
            document.getElementById('img1').src = fileReader.result;
        }
        console.log(e.target.files[0]);
        fileReader.readAsDataURL(e.target.files[0]);

    }
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
                const allBranches = resp.data;
                setPosts(allBranches);
            })
    }, [setNumb, setEmail, setName, setPosts, setRate]);
    
        axios.get(`http://localhost:8080/users/${id}`, 
         {
            headers: {
                Authorization: 'Basic dXNlcjpwYXNz' 
          }
       }).then((resp) => {
        const email = resp.data.email;
        const name = resp.data.name;
        const gender = resp.data.gender;
        const phoneNumber = resp.data.phoneNumber;
        const country = resp.data.country;
        const language = resp.data.language;
        const enabled = resp.data.enabled;
        const rating = resp.data.rating;
        const moderator = resp.data.moderator;
        const nameColor = resp.data.nameColor;
        setEmail(email);
        setName(name)
        setGender(gender);
        setNumb(phoneNumber);
        setCountry(country);
        setLanguage(language);
        setEnabled(enabled);
        setRate(rating);
        setModerator(moderator);
        setNameColor(nameColor);
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
    });

const reName = () => {
    EditText(document.getElementById("UserName"))
    let newName = document.getElementById("UserName").innerText;
    setName(newName);
    console.log(name);
       axios.put("http://localhost:8080/users", {
        'id': id,
        'name': name,
        'email': email,
        'gender': gender,
        'phoneNumber': numb,
        'country': country,
        'language': language,
        'enabled': enabled,
        'rating': rate,
        'moderator': moderator,
        'nameColor': nameColor
},
{
   headers: {
       Authorization: 'Basic dXNlcjpwYXNz' 
}
});
}
const showColorS = () => {
    showColor();
    let newColor = document.getElementById("UserName").classList[0].toUpperCase(); 
    console.log(newColor);
    console.log(name);
    setNameColor(newColor)
       axios.put("http://localhost:8080/users", {
        'id': id,
        'name': name,
        'email': email,
        'gender': gender,
        'phoneNumber': numb,
        'country': country,
        'language': language,
        'enabled': enabled,
        'rating': rate,
        'moderator': moderator,
        'nameColor': nameColor
},
{
   headers: {
       Authorization: 'Basic dXNlcjpwYXNz' 
}
});
},
out = () => signout(() => navigate('/login', { replace: true }));


    return (
        <div className='bodyProfile'>
            <div className='user'>         
                    <img className='userSize' id='img1' src='../profile.png'></img>
                    <input type='file' className='AvatarLoad'
                        placeholder='Загрузить аватар' onChange={avatarSelected}></input>            
                <div className='points'>Очки {rate}</div>
            </div>
            <div className='userInfo'>
                <div className='profborder'>
                    <p>{email}</p>
                </div>
                <div className='profborder'>
                    <p id="UserName" className='black'>User{name}</p>
                    {user.id == id ?(
                    <div>
                        <img className='edit' src='../Edit.png'  onClick={reName}></img>
                        <img className='colors edit' src='../colors.png' onClick={showColorS}></img>
                    </div>) : (<></>) }
                    
                </div>
                <div className='profborder'>
                    <p>{numb}</p>
                </div>
                {user.id == id ?(
                         <Link to="create" className='loginbutton' >
                         <input type='button' value="Создать свою ветку" className='marginRight0'>
                         </input>
                     </Link>) : (<></>) }
               
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
                {user.id == id ?(
                        <button className='marginRight0' onClick={out}>Выйти из аккаунта</button>) : (<></>) }
                
            </div>
        </div>
    )
}

export { Profile };