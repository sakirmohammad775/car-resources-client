import { Link } from "react-router-dom";
import image from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const {createUser}=useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const password =form.password.value
        console.log(name,email,password);
        
        createUser(email,password)
        .then(result=>{                          //tough
            const user=result.user
            console.log(user);
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row space-x-28">
                <div className="text-center lg:text-left w-1/2">

                    <img src={image} alt="image" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn  text-white bg-orange-600 " type="submit" value="Submit" />
                        </div>
                        <p>Already have an Account? <Link className='text-orange-600' to='/login'>SignIn</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
