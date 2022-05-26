import '../Css/Login.css';
import validator from 'validator';
import axios from 'axios';
import { encode } from 'base-64';
const AxiosLogin = (email, password, {signin}, navigate)=>{
    let valid = true;
    /*if(!validator.isEmail(email)) {
        document.getElementById("emERR").innerHTML = "Введите почту";
        valid = false;
    }else{document.getElementById("emERR").innerHTML = "";
        valid = true;
    }*/
    const encoded = encode(email + ":" + password);
    console.log('Basic ' + encoded);
    if(valid)
    axios.get(`http://localhost:8080/users/email/${email}`,{
        headers: {
            Authorization: 'Basic ' + encoded
        }
       }).then (function(res){
            let id = res.data.id;
            let moderator = res.data.moderator; 
            let name = res.data.name; 
            let nameColor = res.data.nameColor; 
            let enabled = res.data.enabled; 
            let language = res.data.language;
            let country = res.data.country; 
            let gender = res.data.gender; 
            let rate = res.data.rating; 
            let mail = res.data.email; 
            let numb = res.data.phoneNumber;
            if(enabled)
            signin(id, moderator, name, nameColor, enabled, 
                language, country, gender, rate, mail,
                 numb, encoded, () => navigate("/main", {replace: true}));
        }).catch(function(e){
            console.log(e)
           document.getElementById("authERR").innerHTML = "Неверный логин или пароль";
        })
    }
export {AxiosLogin};
