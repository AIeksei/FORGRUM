import './App.css';
import React from 'react';
import Registration from "./Registration"
import BannerReg from './BannerReg';
import MainPage from './MainPage';
import Profile from './Profile';
import Login from './Login';
import Banner from './Banner';
import BannerProf from './BannerProf';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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

  render() {
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
          <Banner ToProfile={this.OnMainToProfileButtonClick}/>
          <MainPage ToBranch={this.OnLoginRegButtonClick} />
        </div>
      );
    }
    else if (route === "Profile") {
      return (
        <div>
          < BannerProf ToMain={this.OnProfileToMainButtonClick} />
          <Profile  />
        </div>
      );
    }
  }
}

export default App;