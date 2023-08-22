import { registerUser } from "../../library/apiHandler";

const Register = ()=>{
    const submitHandle = (event)=>{
        const formData = new FormData(event);
        event.preventdefault();
        const reply = registerUser({
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password")
        }).then(e=>{
            if(e == true){

            }
            else{
                
            }
        })
        

    }
    
    return(
    <div className="Register">
        <form>
            <label>Username: <input name="username" type="text"></input></label>
            <label>Email <input name="email" type="text"></input></label>
            <label>Password<input name="password" type="text"></input></label>

            <button type="submit">Submit</button>
        </form>

    </div>)
}

export default {Register}