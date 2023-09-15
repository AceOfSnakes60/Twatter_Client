import { authenticate } from "../../helpers/apiHandler";
import { Link } from "react-router-dom";
import localStorageService from "../../helpers/localStorageService";
import { useEffect, useState } from "react";

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
        console.log()
        authenticate(formData.get("email"), formData.get("password"));

        if(localStorageService.getAccessToken()){
            console.log("Login success");
            window.location.reload();
        }
        
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
                <label>Email:<input type="text" name="email" onChange={handleChange}/></label>
                <label>Password:<input type="text" name="password" onChange={handleChange}/></label>
                <button type="submit" name="login">Submit</button>
            </form>
            <Link to="/register">
            <button type="button" >Register</button>
            </Link>
            
        </div>
    )
}

export default LogIn;