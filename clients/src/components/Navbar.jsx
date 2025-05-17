import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { AuthContext } from "../context/authContext";


const Navbar = () => {
    const {currentUser, logout} = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo"> 
                    <Link to="/"></Link>
                    <img src={logo} alt="Blog by Annetta" />
                </div>
                <div className="links"> 
                    <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
                    <Link className="link" to="/?cat=movies"><h6>MOVIES</h6></Link>
                    <Link className="link" to="/?cat=music"><h6>MUSIC</h6></Link>
                    <Link className="link" to="/?cat=tech"><h6>TECH</h6></Link>
                    {/* <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link> */}
                    <Link className="link" to="/?cat=sports"><h6>SPORTS</h6></Link>
                    <Link className="link" to="/?cat=edu"><h6>EDUCATION</h6></Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? (<span onClick={logout}>Logout</span>) : (<Link className="link" to="/login">Login</Link>)}
                    <span className="write"><Link className="link" to="/compose" >Write</Link></span>
                </div>
            </div>
        </div>
    );
    
};
export default Navbar