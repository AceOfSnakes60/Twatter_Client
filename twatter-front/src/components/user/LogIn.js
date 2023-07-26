const LogIn = ()=>{
    const handleSubmit = (event)=>{

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