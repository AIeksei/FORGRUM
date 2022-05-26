import '../Css/Banner.css';
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../Components/CustomLink'
import { Link } from 'react-router-dom';
import React from 'react';
import { UseAuth } from '../Hook/UseAuth';
const Banner = ()=> {
  const {id} = UseAuth();
  const {enabled} = UseAuth();
  return (
    <>
      <header className="banner">
        <div className="header">
        <CustomLink to="/main" className=' Page_header'><div className="forgrum">FORGRUM </div></CustomLink>
        </div>
        {enabled ? (<div className="profile">
         <CustomLink to={`/profile/${id}`} >профиль</CustomLink> 
  
        </div>): (<> </>) }
      </header>
      
      <main className="container">
      <Outlet />
    </main>
    </>
  );
} 

export {Banner};