
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                const user = { email }
                //get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')

                        }
                    })
            })
            .catch(error =>
                console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row space-x-28">
                <div className="text-center lg:text-left w-1/2">

                    <img src={image} alt="image" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn  text-white bg-orange-600 " type="submit" value="Submit" />
                        </div>
                        <p>Do not have an Account? <Link className='text-orange-600' to='/signUp'>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;