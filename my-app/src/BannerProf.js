import './Banner.css';
import React from 'react';
const BannerProf =({ToMain})=> {

  return (
      <header className="banner">
        <div></div>
        <div className=" header">
          <h1 className="Page_header">FORGRUM</h1>
        </div>
        <div className="profile">
        <input type={'button'} onClick={ToMain} value="На главную"></input>
        </div>
      </header>
  );
} 

export default BannerProf;