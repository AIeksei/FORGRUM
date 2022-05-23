import './Css/Banner.css';
import { Outlet } from 'react-router-dom';
import { CustomLink } from './Components/CustomLink'
import { Link } from 'react-router-dom';
import React from 'react';
const Banner = ()=> {

  return (
    <>
      <header className="banner">
        <div className="header">
        <Link to="/main"> <div className="Page_header">FORGRUM </div></Link>
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