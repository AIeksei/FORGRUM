import './App.css';
import React from 'react';
import Registration from "./Registration"
import BannerReg from './BannerReg';
import MainPage from './MainPage';
import Profile from './Profile';
import Login from './Login';
import Banner from './Banner';
import BannerProf from './BannerProf';
import ConfirmMail from './СonfirmMail'
import validator from 'validator';

//запуск приложения
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      regStruct: [],
      route: 'login',
    };
  }

  OnProfileToLogin = (event) => {
    this.setState({ route: 'login' });
  }
  OnLoginRegButtonClick = (event) => {
    this.setState({ route: 'reg' });
  }

  OnRegToLoginButtonClick = (event) => {
    this.setState({ route: 'login' });
  }

  OnMainToProfileButtonClick = (event) => {
    this.setState({ route: 'Profile' });
  }
  OnProfileToMainButtonClick = (event) => {
    this.setState({ route: 'MainPage' });
  }
  OnLoginToMainButtonClick = (event) => {
    this.setState({ route: 'MainPage' });
  }
  onCreateUserButtonClick = (event) => {
    let toLog = true;
    const email = event.target.parentElement.children[1].value;
    const name =  event.target.parentElement.children[3].value.trim();
    const number =  event.target.parentElement.children[5].value;
    const password =  event.target.parentElement.children[7].value;
    const passwordConfirm =  event.target.parentElement.children[9].value;

    let radios = document.querySelectorAll('input[type="radio"]');
    let gender;
    
    
    for (let radio of radios) {
      if (radio.checked) { 
         gender = radio.value;
      } 
    }  

      if(!validator.isEmail(email)) {
          document.getElementById("emERR").innerHTML = "Не правильная почта";
          toLog = false;
      } else  {document.getElementById("emERR").innerHTML = "";}
      if(name == "") {
        document.getElementById("nameERR").innerHTML = "Введите имя пользователя";
        toLog = false;
    }  else  {document.getElementById("nameERR").innerHTML = "";}
      if(password !== passwordConfirm) {
          document.getElementById("passERR").innerHTML = "Введите одинаковые пароли";
          toLog = false;
      }  else  {document.getElementById("passERR").innerHTML = "";}
      if(!validator.isStrongPassword(password, {minSymbols: 0})) {
          document.getElementById("passERR").innerHTML = "Пароль должен содержать маленькие, большие <br> буквы и число, минимум 8 символов";
          toLog = false;
      }  else  {document.getElementById("passERR").innerHTML = "";}
      if(!validator.isMobilePhone(number)) {
        document.getElementById("phERR").innerHTML = "введите верный номер телефона";
          toLog = false;
      } else  {document.getElementById("phERR").innerHTML = "";}
      if(gender == null) {
        document.getElementById("genERR").innerHTML = "Выберите пол";
        toLog = false;
    }  else  {document.getElementById("genERR").innerHTML = "";}
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, isModerator: false, gender: gender, phoneNumber : number, password: password, confirmPassword: passwordConfirm })
    };
  
    if (email.trim() != '') {
      fetch("http://localhost:8080/users/", requestOptions)
      .then(response => response.json())
    }
    if (toLog)
     this.setState({ route: 'Confirm' });
  }

    render(){
      const { route } = this.state;
      if (route === 'reg') {
        return (
          <div>
            <BannerReg />
            <Registration ToLog={this.OnRegToLoginButtonClick} ToReg = {this.onCreateUserButtonClick}/>
          </div>
        );
      }
      else if (route === "login") {
        return (
          <div>
            <BannerReg />
            <Login ToReg={this.OnLoginRegButtonClick} ToMain ={this.OnLoginToMainButtonClick}/>
          </div>
        );
      }
      else if (route === "MainPage") {
        return (
          <div>
            <Banner ToProfile={this.OnMainToProfileButtonClick} />
            <MainPage ToBranch={this.OnLoginRegButtonClick} />
          </div>
        );
      }
      else if (route === "Profile") {
        return (
          <div>
            < BannerProf ToMain={this.OnProfileToMainButtonClick} />
            < Profile ProfToLog={this.OnProfileToLogin}/>
          </div>
        );
      } 
      else if (route === 'Confirm') {
        return (
          <div>
            <BannerReg />
            <ConfirmMail/>
          </div>
        );
      }
    }
  }

export default App;
