import './HtmlComponents/Css/App.css';
import React from 'react';
import Registration from "./HtmlComponents/Registration"
import BannerReg from './HtmlComponents/BannerReg';
import MainPage from './HtmlComponents/MainPage';
import Profile from './HtmlComponents/Profile';
import Login from './HtmlComponents/Login';
import Banner from './HtmlComponents/Banner';
import BannerProf from './HtmlComponents/BannerProf';
import ConfirmMail from './HtmlComponents/СonfirmMail'
import valid from './HtmlComponents/Components/ValidReg'

//запуск приложения
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      route: 'login',
    };
  }
  OnProfileToCreateBranch = (event) => {
    this.setState({ route: 'CreateBranch' });
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
    this.setState({ route: 'Profile' /*передать айди пользователя*/});
  }
  OnProfileToMainButtonClick = (event) => {
    this.setState({ route: 'MainPage'  /*передать айди пользователя*/ });
  }
  OnLoginToMainButtonClick = (event) => {
    const email = event.target.parentElement.children[1].value;
    const password =  event.target.parentElement.children[2].value;
    if (email.trim() != '') {
      fetch("http://localhost:8080/email/" + email)
      .then(response => response.json())
      .then(password => this.setState({ phoneNumber: password }));
      console.log(password) 
    }
    if (password !== password){
      //ошибка неверный пароль
    }else {this.setState({ route: 'MainPage'  /*передать айди пользователя*/});}
    
  }
  onCreateUserButtonClick = (event) => {
  
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
    let toLog = valid(email, name, password, passwordConfirm, number, gender);
      
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
            <Banner ToProfile={this.OnBannerToProfileButtonClick} />
            <MainPage ToBranch={this.OnLoginRegButtonClick} />
          </div>
        );
      }
      else if (route === "Profile") {
        return (
          <div>
            < BannerProf ToMain={this.OnProfileToMainButtonClick} />
            < Profile ProfToLog={this.OnProfileToLogin}
            ToCreateBranch = {this.OnProfileToCreateBranch}/>
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
      else if (route === 'CreateBranch') {
        return (
          <div>
            <Banner ToProfile={this.OnBannerToProfileButtonClick} />
            <CreateBranch />
          </div>
        );
      }
    }
  }

export default App;
