import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript
import 'jquery/dist/jquery.min.js'; // Import jQuery
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import 'popper.js/dist/umd/popper.min.js'; // Import Popper.js
import { Link } from 'react-router-dom';

function Navbar(){
    const handleLogout = () =>{
        sessionStorage.removeItem("isLoggedIn");
        window.location.reload();
    }

return(
    <nav className="navbar navbar-light bg-white">
        <a href="/" className="navbar-brand">Twatter</a>
        {sessionStorage.getItem('isLoggedin')&&<button onClick={handleLogout}>Log out</button>}
        <form className="form-inline">
            <div className="input-group">
                <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="button-addon2">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
           
        </form>
    </nav>);
}
export default Navbar;