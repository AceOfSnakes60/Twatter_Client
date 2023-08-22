import { validateUser } from "../../library/apiHandler";

const LogIn = ()=>{
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const user = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        validateUser(user).then(e=>{
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
        </div>
    )
}

export default LogIn;