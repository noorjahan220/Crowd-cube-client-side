import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Signin = () => {

    const {signInUser} = useContext(AuthContext);
    const handleSignin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(password, email)

        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}

            fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/users`,{
                method:'PATCH',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data=>{
                console.log("sign In info update in db",data)
            })
        })
        .catch(error=>{
            console.log(error)
        })

       
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">login</h1>

            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <Link to="/register" >Register</Link> 
                </form>
            </div>
        </div>
    </div>
    );
};

export default Signin;