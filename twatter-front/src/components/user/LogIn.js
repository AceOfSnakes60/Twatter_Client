import { authenticate } from "../../helpers/apiHandler";
import { Link } from "react-router-dom";

const LogIn = (props)=>{


    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const user = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        authenticate(user).then(e=>{
            if(e.isEmailValid&&e.isPasswordValid){
                console.log("Login success");
                sessionStorage.setItem('isLoggedin', true);
                window.location.reload();
            }
        }).catch(error=>console.error(error));
    }


    return(
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <label>Email:<input type="text" name="email"/></label>
                <label>Password:<input type="text" name="password"/></label>
                <button type="submit" name="login">submit</button>
            </form>
            <Link to="/register">
            <button type="button" >Register</button>
            </Link>
            
        </div>
    )
}

export default LogIn;