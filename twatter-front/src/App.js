
import { useState } from 'react';
import './App.css';
import Posts from "./components/posts/Posts.js";
import Register from "./components/user/Register";

function App() {

  const [isPosts, setIsPosts] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="App">
      {isPosts&&<Posts setIsPosts={setIsPosts} setIsRegister={setIsRegister}/>}
      {isRegister&&<Register setIsPosts={setIsPosts} setIsRegister={setIsRegister}/>}
    </div>
  );
}

export default App;
