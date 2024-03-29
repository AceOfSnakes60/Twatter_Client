import React, { useEffect, useState } from 'react';


import UserBar from './user/UserBar';
import SendPost from './MessageField';
import Card from './Card';
import Posts from './posts/Posts';
import LogIn from './user/LogIn';
import localStorageService from '../helpers/localStorageService';
import ShowGroup from './groups/RecommendGroups';
import RecommendGroups from './groups/RecommendGroups';

function Main() {

  return (
    <div>

      <div className="container-fluid gedf-wrapper">
        <div className="row">
        <div className="col-md-3">
            {localStorageService.getAccessToken()&&<UserBar/>} {/*Use Context for logged user*/}
        </div>
        <div className="col-md-6 gedf-main">
          {(localStorageService.getAccessToken())?<SendPost/>:<LogIn/>}
          <Posts endpoint=''/>
        </div>
        <div className="col-md-3">
            <RecommendGroups/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;