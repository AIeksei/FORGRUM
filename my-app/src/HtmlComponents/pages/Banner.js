import '../Css/Banner.css';
import { Outlet } from 'react-router-dom';
import { CustomLink } from '../Components/CustomLink'
import { Link } from 'react-router-dom';
import React from 'react';
import { UseAuth } from '../Hook/UseAuth';
const Banner = () => {
  const { id } = UseAuth();
  const { enabled } = UseAuth();
  const user = UseAuth();
  return (
    <>
      <header className="banner">
        <div className="header">
          <CustomLink to="/main" className=' Page_header'><div className="forgrum">FORGRUM </div></CustomLink>
        </div>
          {enabled ? (
            <>
            {
              user.language == "ru" ? (<><div className="profile">
                <CustomLink to={`/profile/${id}`} >профиль</CustomLink>
              </div></>) : (<><div className="profile">
                <CustomLink to={`/profile/${id}`} >profile</CustomLink>
              </div></>)
            }</>) : (<> </>)}
        </header>
        <main className="container">
          <Outlet />
        </main>
      </>
  );
}

export { Banner };