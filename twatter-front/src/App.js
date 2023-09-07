
import { useState } from 'react';
import {BrowserRouter, Switch, Routes, Route} from "react-router-dom";
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
import SinglePost from './components/posts/SinglePost';


function App() {

  const [isPosts, setIsPosts] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/post/:id" element={<SinglePost/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
