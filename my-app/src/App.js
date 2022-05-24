import './HtmlComponents/Css/App.css';
import React from 'react';
import {Registration} from "./HtmlComponents/pages/Registration"
import {BannerReg} from './HtmlComponents/pages/BannerReg';
import {MainPage} from './HtmlComponents/pages/MainPage';
import {Profile} from './HtmlComponents/pages/Profile';
import {Login} from './HtmlComponents/pages/Login';
import {Banner} from './HtmlComponents/pages/Banner';
import {ConfirmMail} from './HtmlComponents/pages/СonfirmMail'
import {CreateBranch} from './HtmlComponents/pages/CreateBranch';
import {Branch} from './HtmlComponents/pages/Branch';
import { RequireAuth } from './HtmlComponents/Hoc/RequireAuth';
import { AuthProvider } from './HtmlComponents/Hoc/AuthProvider';
import { Notfoundpage } from './HtmlComponents/pages/NotFoundPage';

import { Routes, Route, Navigate } from 'react-router-dom';

//запуск приложения

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
       <Route path="/" element={<BannerReg />}>
       <Route path="login" element={<Login />} />
       <Route path="registration" element={<Registration />} />
       <Route path="confirm" element={<ConfirmMail />} />
       <Route path="*" element={<Notfoundpage />} />
       </Route>
        <Route path="/" element={<Banner />}>
          <Route path="/main" element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>} />
          <Route path="profile/:id" element={
          <RequireAuth>
          <Profile />
        </RequireAuth>} />
          <Route path="branch/:branchid" element={
          <RequireAuth>
            <Branch/>
        </RequireAuth>} />
          <Route path="profile/:id/create" element={
            <RequireAuth>
              <CreateBranch />
            </RequireAuth>} />
        </Route>
      </Routes>
      </AuthProvider>

  );
}

/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      route: 'Branch',
    };
  }
  OnProfileToCreateBranch = (event) => {
    this.setState({ route: 'CreateBranch' });
  }
  OnCreateBranchToMain = (event) => {
    this.setState({ route: 'MainPage' });
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
    this.setState({ route: 'Profile' /*передать айди пользователя});
  }
  OnProfileToMainButtonClick = (event) => {
    this.setState({ route: 'MainPage'  /*передать айди пользователя });
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
    }else {this.setState({ route: 'MainPage'  /*передать айди пользователя);}
    
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
            <Banner ToProfile={this.OnMainToProfileButtonClick} />
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
      }else if (route === "Branch") {
        return (
          <div>
            <Banner ToProfile={this.OnMainToProfileButtonClick} />
            <Branch />
          </div>
        );
      }
      else if (route === 'CreateBranch') {
        return (
          <div>
            <Banner ToProfile={this.OnBannerToProfileButtonClick} />
            <CreateBranch ToMain={this.OnCreateBranchToMain}/>
          </div>
        );
      }
    }
  }*/

export default App;
