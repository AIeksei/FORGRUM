import './Banner.css';
import React from 'react';
const Banner = ({ToProfile})=> {

  return (
      <header className="banner">
        <div></div>
        <div className=" header">
          <h1 className="Page_header">FORGRUM</h1>
        </div>
        <div className="profile">
          <input type={'button'} onClick={ToProfile} value="Профиль"></input>
        </div>
      </header>
  );
} 

export default Banner;