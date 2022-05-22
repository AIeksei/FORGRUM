import './App.css';
import React from 'react';
import Registration from "./Registration"
import BannerReg from './BannerReg';
import MainPage from './MainPage';
import Profile from './Profile';
import Login from './Login';
import Banner from './Banner';
import BannerProf from './BannerProf';
import СonfirmMail from './СonfirmMail'
//запуск приложения
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      regStruct: [],
      route: 'MainPage',
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
 
    const email = event.target.parentElement.children[1].value;
    const name =  event.target.parentElement.children[2].value;
    const number =  event.target.parentElement.children[3].value;
    const password =  event.target.parentElement.children[4].value;
    const passwordConfirm =  event.target.parentElement.children[5].value;
    console.log(email);
    console.log(name);
    console.log(number);
    console.log(password);
    console.log(passwordConfirm);
    let radios = document.querySelectorAll('input[type="radio"]');
    let gender;
    
    for (let radio of radios) {
      if (radio.checked) { 
         gender = radio.value;
      }
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, isModerator: false, gender: gender, password: password, confirmPassword: passwordConfirm })
    };
  
    if (email.trim() != '') {
      fetch("http://localhost:8080/users/", requestOptions)
      .then(response => response.json())
    }
    this.setState({ route: 'login' });
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
    }
  }

export default App;
