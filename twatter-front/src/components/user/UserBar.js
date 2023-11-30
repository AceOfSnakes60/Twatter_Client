import localStorageService from "../../helpers/localStorageService";
import {getMyself} from "../../helpers/apiHandler";
import React, {useEffect, useState} from "react";
import { MDBBtn, MDBInput, MDBBtnGroup } from 'mdb-react-ui-kit';


function UserBar(){
  
  const [user, setUser] = useState();

  useEffect(()=>{
    getMyself().then((response)=>{
      console.log(response.data)
      if(response){
        setUser(response.data);
      }
    });

  },[])

  const handleLogout = ()=>{
    localStorageService.clear();
    window.location.reload();
  }

  const handleCreateGroup = () => {
    window.location.href = "/creategroup";
  };
return(        

<div className="card">
  <div className="card-body">
    {user&&user.username&&<div className="h5">{user.username}</div>}
   {/* <div className="h7 text-muted">Fullname: Miracles Lee Cross</div>
    {user&&user.description&&<div className="h7">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.</div>}*/}
  </div>
  {/* 
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
      <div className="h6 text-muted">Followers</div>
      {user&&user.followers&&<div className="h5">{user.followers}</div>}
    </li>
    <li className="list-group-item">
      <div className="h6 text-muted">Following</div>
      {user&&user.following&&<div className="h5">{user.following}</div>}
    </li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul> */}

<MDBBtnGroup vertical aria-label='Vertical button group'>
  <MDBBtn outline size='sm'>Settings</MDBBtn>

  <MDBBtn outline size='sm' onClick={handleCreateGroup}>Create Group</MDBBtn>
  <MDBBtn color="danger" size='sm' onClick={handleLogout}>Log out</MDBBtn>
  </MDBBtnGroup>
</div>
)
}

export default UserBar;