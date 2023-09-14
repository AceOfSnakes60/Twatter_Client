import React, { useEffect, useState } from 'react';


import UserBar from './UserBar';
import SendPost from './SendPost';
import Card from './Card';
import Posts from './posts/Posts';
import LogIn from './user/LogIn';
import localStorageService from '../helpers/localStorageService';

function Main() {

  return (
    <div>

      <div className="container-fluid gedf-wrapper">
        <div className="row">
        <div className="col-md-3">
            {localStorageService.getAccessToken()?<UserBar/>:<LogIn/>} {/*Use Context for logged user*/}
        </div>
        <div className="col-md-6 gedf-main">
          {localStorageService.getAccessToken()&&<SendPost/>}
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