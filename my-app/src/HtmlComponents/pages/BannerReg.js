import '../Css/BannerReg.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
function BannerReg() {

  return (
    <>
      <header className="bannerReg">
        <div>
          <h1 className="Page_header">FORGRUM</h1>
        </div>
      </header>
       <main className="container">
       <Outlet />
     </main>
     </>
  );
} 

export {BannerReg};