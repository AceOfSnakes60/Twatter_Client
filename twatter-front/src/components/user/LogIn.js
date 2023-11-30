import { authenticate } from "../../helpers/apiHandler";
import { Link } from "react-router-dom";
import localStorageService from "../../helpers/localStorageService";
import { useEffect, useState } from "react";
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const LogIn = (props)=>{
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
      })


    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const user = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        authenticate(formData.get("email"), formData.get("password")).then((res)=>{
            console.log("After Authentication")
            console.log(res)
            if(localStorageService.getAccessToken()){
                console.log("Login success");
                window.location.reload();
            }
        })
        
    }
    const handleChange = (event)=>{
            const {name, value} = event.target;
            setLoginData({
              ...loginData,
              [name]: value,
            })
    }


    return(
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
            <div class="col d-flex justify-content-center ">
                <MDBInput value={loginData.email} id="emailForm" type="text" placeholder="Email/Username" name="email" class="form-control" onChange={handleChange}/>
                <MDBInput value={loginData.password} id="passwordForm" type="password" placeholder="Password" name="password" class="form-control" onChange={handleChange}/>
                <MDBBtn color='light' rippleColor='dark' type="submit" name="login">Submit</MDBBtn>
            </div>
            </form>
            <div class="text-center">
                <p>Not a member? <a href="/register">Register</a></p>
            </div>
            
        </div>
    )
}

export default LogIn;