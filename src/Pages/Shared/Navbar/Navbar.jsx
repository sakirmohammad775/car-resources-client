import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const {user,logOut}=useContext(AuthContext)
    

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch()
    }

    const navItems=<>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/services"><li>Services</li></Link>
        <Link to="/blog"><li>Blog</li></Link>
        <Link to="/contact"><li>Contact</li></Link>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo}></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 ">
                   {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email? <>
                    <Link to='/bookings'><button ></button></Link>
                    <button  onClick={handleLogOut} className="btn btn-ghost text-white bg-orange-600 px-10">Log Out</button>
                    </>:
                    <Link to="/login"><button className="btn btn-ghost text-white bg-orange-600 px-10">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;