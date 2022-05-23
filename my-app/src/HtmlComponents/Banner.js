import './Css/Banner.css';
import { Outlet } from 'react-router-dom';
import { CustomLink } from './Components/CustomLink'
import React from 'react';
const Banner = ({ToProfile})=> {

  return (
    <>
      <header className="banner">
        <div className="header">
          <h1 className="Page_header">FORGRUM</h1>
        </div>
        <div className="profile">
        <CustomLink to="/profile" >профиль</CustomLink>
  
        </div>
      </header>
      
      <main className="container">
      <Outlet />
    </main>
    </>
  );
} 

export {Banner};