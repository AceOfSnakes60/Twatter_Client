
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript
import 'jquery/dist/jquery.min.js'; // Import jQuery
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import 'popper.js/dist/umd/popper.min.js'; // Import Popper.js
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main';
import Posts from "./components/posts/Posts.js";
import Register from "./components/user/Register";
import SinglePostMain from './components/posts/SinglePostMain';
import CreateGroup from './components/groups/CreateGroup';
import GroupMain from './components/groups/GroupMain';
import UserMain from './components/user/UserMain';



function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/post/:id" element={<SinglePostMain/>}/>
          <Route path="/creategroup" element={<CreateGroup/>}/> 
          <Route path="/group/:id" element={<GroupMain/>}/>
          <Route path="/user/:username" element={<UserMain/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
