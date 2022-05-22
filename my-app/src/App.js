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
//запуск приложения
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      regStruct: [],
      route: 'MainPage',
    };
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
  onCreateUserButtonClick = (event) => {
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const number = document.getElementById("number");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("passwordConfirm");
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
      body: JSON.stringify({ name: name, email: email, isModerator: 0, gender: gender, password: password, confirmPassword: passwordConfirm })
    };

    if (email.trim() != '') {
      fetch("http://localhost:8080/users/", requestOptions)
    }
    route = 'login'
  }
    render(){
      const { route } = this.state;
      if (route === 'reg') {
        return (
          <div>
            <BannerReg />
            <Registration ToLog={this.OnRegToLoginButtonClick} />
          </div>
        );
      }
      else if (route === "login") {
        return (
          <div>
            <BannerReg />
            <Login ToReg={this.OnLoginRegButtonClick} />
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
            <Profile />
          </div>
        );
      }
    }
  }


export default App;
