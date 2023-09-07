import React, { useEffect, useState } from 'react';


import UserBar from './UserBar';
import CenterBar from './CenterBar';
import Card from './Card';
import Posts from './posts/Posts';
import LogIn from './user/LogIn';
import Register from './user/Register';

function Main() {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div>

      <div className="container-fluid gedf-wrapper">
        <div className="row">
        <div className="col-md-3">
            {sessionStorage.getItem('isLoggedin')?<UserBar/>:<LogIn/>}
        </div>
        <div className="col-md-6 gedf-main">
          {sessionStorage.getItem('isLoggedin')&&<CenterBar/>}
          <Posts/>
        </div>
        <div className="col-md-3">
            <Card/>
            <Card/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;